import {Modal} from '../../ui/modal/Modal';
import React, {useState} from 'react';
import {FormMode} from '../../../types/FormMode';
import {Field, Form, Formik} from 'formik';
import {DomainForm} from '../../../types/DomainForm';
import './DomainsModal.scss';
import {IconPicker} from '../../ui/icon-picker/IconPicker';

export function DomainsModal(props: DomainsModalProps) {

  const [rightVisible, setRightVisible] = useState<boolean>(true);
  const iconsIndex = '/icons-index.json';

  const handleOnSubmit = (values, actions) => {
    console.log({values, actions});
    alert(JSON.stringify(values, null, 2));
    actions.setSubmitting(false);
    actions.resetForm(new DomainForm());
  };

  return (
      <Formik onSubmit={handleOnSubmit} initialValues={new DomainForm()}>
        {(p) => (
            <Modal title={'Create a new site'}
                   open={props.modalOpen}
                   onClose={props.onClose}
                   onSubmit={() => p.submitForm()}
                   submitText={props.mode === 'create' ? 'Create site' : 'Update site'}
                   onCancel={() => p.resetForm()}
            >
              <Form>
                <div className='left'>
                  <IconPicker
                      onImageSelect={(img) => p.setFieldValue('image', img)}
                      imageIndex={iconsIndex}
                      onOpenPicker={() => setRightVisible(false)}
                      onClosePicker={() => setRightVisible(true)}
                  />
                </div>
                <div className={(rightVisible ? 'right' : 'right hidden')}>
                  <Field name='title'>
                    {({field, meta}) => (
                        <div>
                          <label htmlFor='title'>Choose the title of your website. You can change
                            this later.</label>
                          <input type='text' {...field} placeholder='Your website name'/>
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
                          <input type='text' {...field} placeholder='your-website-id'/>
                          {meta.touched && meta.error && meta.error}
                        </div>
                    )}
                  </Field>
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
}
