//Source code generated by AppGPT (www.appgpt.tech)
import { Admin, Resource, CustomRoutes } from 'react-admin';
import { customDataProvider } from './dataProvider';
import fakeDataProvider from 'ra-data-fakerest';
import { Dashboard } from './dashboard';
import { authProvider, apInitialize } from './authProvider';
import { i18nProvider } from './i18nProvider';
import LoginPage, { Login } from './Login';
import data from './data';
import { LawsList, LawsCreate, LawsEdit } from './resources/Laws';
import {
  LawTypesList,
  LawTypesCreate,
  LawTypesEdit,
} from './resources/LawTypes';
import {
  LanguagesList,
  LanguagesCreate,
  LanguagesEdit,
} from './resources/Languages';
import { UserList, UserCreate, UserEdit } from './resources/User';
import LawsIcon from '@mui/icons-material/Gavel';
import LawTypesIcon from '@mui/icons-material/Category';
import LanguagesIcon from '@mui/icons-material/Translate';
import UserIcon from '@mui/icons-material/AccountBox';
// SUPERTOKENS
import React from 'react';
import SuperTokens, {
  SuperTokensWrapper,
  getSuperTokensRoutesForReactRouterDom,
} from 'supertokens-auth-react';
import ThirdPartyPasswordless from 'supertokens-auth-react/recipe/thirdpartypasswordless';
import Session from 'supertokens-auth-react/recipe/session';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import * as reactRouterDom from 'react-router-dom';
let sessionFn = Session.init();
SuperTokens.init({
  appInfo: {
    appName: import.meta.env.VITE_SUPERTOKENS_APPNAME,
    apiDomain: import.meta.env.VITE_BACKEND_DOMAIN,
    websiteDomain: import.meta.env.VITE_SUPERTOKENS_WEBSITEDOMAIN,
    apiBasePath: import.meta.env.VITE_BACKEND_APIPATH + '/auth',
    websiteBasePath: import.meta.env.VITE_SUPERTOKENS_WEBSITEBASEPATH,
  },
  recipeList: [
    ThirdPartyPasswordless.init({
      contactMethod: 'EMAIL',
      signInUpFeature: {
        providers: [
          ThirdPartyPasswordless.Github.init(),
          //ThirdPartyPasswordless.Google.init(),
          //ThirdPartyPasswordless.Facebook.init(),
          //ThirdPartyPasswordless.Apple.init(),
        ],
      },
    }),
    sessionFn,
  ],
});
apInitialize(Session);
// END SUPERTOKENS
let dataProvider: any;
if (import.meta.env.VITE_USE_BACKEND_DATA === 'true') {
  dataProvider = customDataProvider(
    import.meta.env.VITE_BACKEND_DOMAIN +
      import.meta.env.VITE_BACKEND_APIPATH +
      '/proxy',
  );
} else {
  dataProvider = fakeDataProvider(data.defaultData);
}

const App = () => (
  <SuperTokensWrapper>
    <BrowserRouter basename="/a5caac484">
      <Admin
        authProvider={
          import.meta.env.VITE_ENVIRONMENT != 'DEV' ? authProvider : undefined
        }
        requireAuth
        loginPage={LoginPage}
        dataProvider={dataProvider}
        i18nProvider={i18nProvider}
        dashboard={Dashboard}
      >
        <Resource
          name="Laws"
          options={{ label: 'Laws' }}
          list={LawsList}
          create={LawsCreate}
          edit={LawsEdit}
          recordRepresentation="Title"
          icon={LawsIcon}
        />
        <Resource
          name="LawTypes"
          options={{ label: 'Law Types' }}
          list={LawTypesList}
          create={LawTypesCreate}
          edit={LawTypesEdit}
          recordRepresentation="Name"
          icon={LawTypesIcon}
        />
        <Resource
          name="Languages"
          options={{ label: 'Languages' }}
          list={LanguagesList}
          create={LanguagesCreate}
          edit={LanguagesEdit}
          recordRepresentation="Name"
          icon={LanguagesIcon}
        />
        <Resource
          name="User"
          options={{ label: 'User' }}
          list={UserList}
          create={UserCreate}
          edit={UserEdit}
          recordRepresentation="Username"
          icon={UserIcon}
        />
        <CustomRoutes noLayout>
          {/*This renders the login UI on the /auth route*/}
          {getSuperTokensRoutesForReactRouterDom(reactRouterDom)}
          {/*Your app routes*/}
        </CustomRoutes>
      </Admin>
    </BrowserRouter>
  </SuperTokensWrapper>
);

export default App;
