import {Modal} from 'components/ui/modal/Modal';
import React, {useState} from 'react';
import {FormMode} from 'types/FormMode';
import {Field, Form, Formik} from 'formik';
import {DomainForm} from 'types/DomainForm';
import './DomainsModal.scss';
import {IconPicker} from 'components/ui/icon-picker/IconPicker';
import {bucketName} from 'utils/firebase';
import {FormikHelpers} from 'formik/dist/types';

export function DomainsModal(props: DomainsModalProps) {

  const [rightVisible, setRightVisible] = useState<boolean>(true);
  const baseUrl = 'https://firebasestorage.googleapis.com/v0/b/' + bucketName + '/o/default-resources%2Ficons%2F{file}?alt=media';
  const iconsIndex = baseUrl.replace('{file}', 'index.json');

  const handleOnSubmit = (values: DomainForm, actions: FormikHelpers<DomainForm>) => {
    props.onSave(values);
    actions.setSubmitting(false);
    actions.resetForm();
    props.onClose();
  };

  const handleReset = (values: DomainForm, actions: FormikHelpers<DomainForm>) => {
    props.onClose();
  };

  return (
    <Formik onSubmit={handleOnSubmit}
            onReset={handleReset}
            initialValues={DomainForm.emptyForm()}
            validationSchema={DomainForm.ValidationSchema}
    >
      {({errors}) => (
        <Modal title={'Create a new site'} open={props.modalOpen} onClose={props.onClose}>
          <Form>
            <div className={'fields'}>
              <div className='left'>
                <IconPicker
                  fieldName={'icon'}
                  imageIndex={iconsIndex}
                  hasErrors={!!errors.icon}
                  baseUrl={baseUrl}
                  onOpenPicker={() => setRightVisible(false)}
                  onClosePicker={() => setRightVisible(true)}
                />
              </div>
              <div className={(rightVisible ? 'right' : 'right hidden')}>
                <Field name='title'>
                  {({field, meta}) => (
                    <div>
                      <label htmlFor='title'>
                        Choose the title of your website. You can change this later.
                      </label>
                      <input type='text'
                             placeholder='Your website name'
                             className={(errors.title ? 'has-error' : '')}
                             {...field}
                      />
                      {meta.touched && meta.error && meta.error}
                    </div>
                  )}
                </Field>
                <Field name='id'>
                  {({field, meta}) => (
                    <div>
                      <label htmlFor='id'>
                        Assign an unique id to your website. This cannot be changed, but nobody
                        else will see it.
                      </label>
                      <input
                        type='text'
                        className={(errors.title ? 'has-error' : '')}
                        placeholder='your-website-id'
                        {...field}
                      />
                      {meta.touched && meta.error && meta.error}
                    </div>
                  )}
                </Field>
              </div>
            </div>
            <div className={'modal-footer'}>
              <button type={'submit'}
                      className={'submit'}>{props.mode === 'create' ? 'Create site' : 'Update site'}</button>
              <button type={'reset'}>Cancel</button>
            </div>
          </Form>
        </Modal>
      )}
    </Formik>
  );
}

interface DomainsModalProps {
  mode: FormMode
  modalOpen: boolean
  onClose: () => void
  onSave: (form: DomainForm) => void
}
