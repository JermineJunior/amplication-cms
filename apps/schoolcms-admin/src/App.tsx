import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { AcademicperiodList } from "./academicperiod/AcademicperiodList";
import { AcademicperiodCreate } from "./academicperiod/AcademicperiodCreate";
import { AcademicperiodEdit } from "./academicperiod/AcademicperiodEdit";
import { AcademicperiodShow } from "./academicperiod/AcademicperiodShow";
import { AcademicyearList } from "./academicyear/AcademicyearList";
import { AcademicyearCreate } from "./academicyear/AcademicyearCreate";
import { AcademicyearEdit } from "./academicyear/AcademicyearEdit";
import { AcademicyearShow } from "./academicyear/AcademicyearShow";
import { ClassroomList } from "./classroom/ClassroomList";
import { ClassroomCreate } from "./classroom/ClassroomCreate";
import { ClassroomEdit } from "./classroom/ClassroomEdit";
import { ClassroomShow } from "./classroom/ClassroomShow";
import { EnterpriseList } from "./enterprise/EnterpriseList";
import { EnterpriseCreate } from "./enterprise/EnterpriseCreate";
import { EnterpriseEdit } from "./enterprise/EnterpriseEdit";
import { EnterpriseShow } from "./enterprise/EnterpriseShow";
import { FailedJobList } from "./failedJob/FailedJobList";
import { FailedJobCreate } from "./failedJob/FailedJobCreate";
import { FailedJobEdit } from "./failedJob/FailedJobEdit";
import { FailedJobShow } from "./failedJob/FailedJobShow";
import { MigrationList } from "./migration/MigrationList";
import { MigrationCreate } from "./migration/MigrationCreate";
import { MigrationEdit } from "./migration/MigrationEdit";
import { MigrationShow } from "./migration/MigrationShow";
import { ParentList } from "./parent/ParentList";
import { ParentCreate } from "./parent/ParentCreate";
import { ParentEdit } from "./parent/ParentEdit";
import { ParentShow } from "./parent/ParentShow";
import { PasswordResetList } from "./passwordReset/PasswordResetList";
import { PasswordResetCreate } from "./passwordReset/PasswordResetCreate";
import { PasswordResetEdit } from "./passwordReset/PasswordResetEdit";
import { PasswordResetShow } from "./passwordReset/PasswordResetShow";
import { PersonalAccessTokenList } from "./personalAccessToken/PersonalAccessTokenList";
import { PersonalAccessTokenCreate } from "./personalAccessToken/PersonalAccessTokenCreate";
import { PersonalAccessTokenEdit } from "./personalAccessToken/PersonalAccessTokenEdit";
import { PersonalAccessTokenShow } from "./personalAccessToken/PersonalAccessTokenShow";
import { StudentList } from "./student/StudentList";
import { StudentCreate } from "./student/StudentCreate";
import { StudentEdit } from "./student/StudentEdit";
import { StudentShow } from "./student/StudentShow";
import { SubjectList } from "./subject/SubjectList";
import { SubjectCreate } from "./subject/SubjectCreate";
import { SubjectEdit } from "./subject/SubjectEdit";
import { SubjectShow } from "./subject/SubjectShow";
import { TeacherList } from "./teacher/TeacherList";
import { TeacherCreate } from "./teacher/TeacherCreate";
import { TeacherEdit } from "./teacher/TeacherEdit";
import { TeacherShow } from "./teacher/TeacherShow";
import { TeachersAttendeeList } from "./teachersAttendee/TeachersAttendeeList";
import { TeachersAttendeeCreate } from "./teachersAttendee/TeachersAttendeeCreate";
import { TeachersAttendeeEdit } from "./teachersAttendee/TeachersAttendeeEdit";
import { TeachersAttendeeShow } from "./teachersAttendee/TeachersAttendeeShow";
import { TeachersPaymentList } from "./teachersPayment/TeachersPaymentList";
import { TeachersPaymentCreate } from "./teachersPayment/TeachersPaymentCreate";
import { TeachersPaymentEdit } from "./teachersPayment/TeachersPaymentEdit";
import { TeachersPaymentShow } from "./teachersPayment/TeachersPaymentShow";
import { TuitionFeeList } from "./tuitionFee/TuitionFeeList";
import { TuitionFeeCreate } from "./tuitionFee/TuitionFeeCreate";
import { TuitionFeeEdit } from "./tuitionFee/TuitionFeeEdit";
import { TuitionFeeShow } from "./tuitionFee/TuitionFeeShow";
import { UserModelList } from "./userModel/UserModelList";
import { UserModelCreate } from "./userModel/UserModelCreate";
import { UserModelEdit } from "./userModel/UserModelEdit";
import { UserModelShow } from "./userModel/UserModelShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"schoolcms"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Academicperiod"
          list={AcademicperiodList}
          edit={AcademicperiodEdit}
          create={AcademicperiodCreate}
          show={AcademicperiodShow}
        />
        <Resource
          name="Academicyear"
          list={AcademicyearList}
          edit={AcademicyearEdit}
          create={AcademicyearCreate}
          show={AcademicyearShow}
        />
        <Resource
          name="Classroom"
          list={ClassroomList}
          edit={ClassroomEdit}
          create={ClassroomCreate}
          show={ClassroomShow}
        />
        <Resource
          name="Enterprise"
          list={EnterpriseList}
          edit={EnterpriseEdit}
          create={EnterpriseCreate}
          show={EnterpriseShow}
        />
        <Resource
          name="FailedJob"
          list={FailedJobList}
          edit={FailedJobEdit}
          create={FailedJobCreate}
          show={FailedJobShow}
        />
        <Resource
          name="Migration"
          list={MigrationList}
          edit={MigrationEdit}
          create={MigrationCreate}
          show={MigrationShow}
        />
        <Resource
          name="Parent"
          list={ParentList}
          edit={ParentEdit}
          create={ParentCreate}
          show={ParentShow}
        />
        <Resource
          name="PasswordReset"
          list={PasswordResetList}
          edit={PasswordResetEdit}
          create={PasswordResetCreate}
          show={PasswordResetShow}
        />
        <Resource
          name="PersonalAccessToken"
          list={PersonalAccessTokenList}
          edit={PersonalAccessTokenEdit}
          create={PersonalAccessTokenCreate}
          show={PersonalAccessTokenShow}
        />
        <Resource
          name="Student"
          list={StudentList}
          edit={StudentEdit}
          create={StudentCreate}
          show={StudentShow}
        />
        <Resource
          name="Subject"
          list={SubjectList}
          edit={SubjectEdit}
          create={SubjectCreate}
          show={SubjectShow}
        />
        <Resource
          name="Teacher"
          list={TeacherList}
          edit={TeacherEdit}
          create={TeacherCreate}
          show={TeacherShow}
        />
        <Resource
          name="TeachersAttendee"
          list={TeachersAttendeeList}
          edit={TeachersAttendeeEdit}
          create={TeachersAttendeeCreate}
          show={TeachersAttendeeShow}
        />
        <Resource
          name="TeachersPayment"
          list={TeachersPaymentList}
          edit={TeachersPaymentEdit}
          create={TeachersPaymentCreate}
          show={TeachersPaymentShow}
        />
        <Resource
          name="TuitionFee"
          list={TuitionFeeList}
          edit={TuitionFeeEdit}
          create={TuitionFeeCreate}
          show={TuitionFeeShow}
        />
        <Resource
          name="UserModel"
          list={UserModelList}
          edit={UserModelEdit}
          create={UserModelCreate}
          show={UserModelShow}
        />
      </Admin>
    </div>
  );
};

export default App;
