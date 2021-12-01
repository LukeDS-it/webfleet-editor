import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import {DomainsViewer} from 'components/layout/domains-viewer/DomainsViewer';
import {AuthProvider} from 'utils/Auth';
import PrivateRoute from 'components/ui/PrivateRoute';
import {LoginView} from 'components/layout/login/LoginView';
import {LoadingScreen} from 'components/ui/loading-screen/LoadingScreen';
import {ProjectView} from 'components/layout/project-view/ProjectView';
import {DomainDashboard} from 'components/layout/domain-dashboard/DomainDashboard';
import {DomainPages} from 'components/layout/domain-pages/DomainPages';
import {DomainBlog} from 'components/layout/domain-blog/DomainBlog';
import {DomainConfiguration} from 'components/layout/domain-configuration/DomainConfiguration';
import {DomainResources} from 'components/layout/domain-resources/DomainResources';
import {DomainAccessList} from 'components/layout/domain-access-list/DomainAccessList';

const App = () => {

  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<LoginView/>}/>
          <Route path="/loading" element={<LoadingScreen/>}/>
          <Route element={<PrivateRoute/>}>
            <Route path="/" element={<DomainsViewer/>}/>
          </Route>
          <Route element={<PrivateRoute/>}>
            <Route path="/projects/:domainId" element={<ProjectView/>}>
              <Route path="dashboard" element={<DomainDashboard/>}/>
              <Route path="pages" element={<DomainPages/>}/>
              <Route path="pages/:pageId" element={<DomainPages/>}/>
              <Route path="blog" element={<DomainBlog/>}/>
              <Route path="configuration" element={<DomainConfiguration/>}/>
              <Route path="resources" element={<DomainResources/>}/>
              <Route path="access-list" element={<DomainAccessList/>}/>
            </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );

};

export default App;
