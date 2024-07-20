interface sidebarInfoTypes {
  heading: string;
  links: {
    name: string;
    icon: FC<DetailedHTMLProps<SVGProps<SVGSVGElement>, SVGSVGElement>>;
    link: string;
  }[];
}

interface userType {
  accountNumber: string;
  bank: string;
  bvn: string;
  childern: number;
  dateCreated: string;
  durationOfEmployment: string;
  email: string;
  employmentStatus: string;
  firstName: string;
  fullName: string;
  gender: string;
  guarantors: {
    email: string;
    fullName: string;
    phoneNumber: string;
    relationship: string;
  }[];

  instaHandle: string;
  lastName: string;
  levelOfEducation: string;
  loanRepayment: number;
  maritalStatus: string;
  monthlyIncome: {
    max: string;
    min: string;
  };

  officialMail: string;
  organization: string;
  phoneNumber: string;
  residenceType: string;
  sectionOfEmployment: string;
  status: string;
  tier: number;
  twitterHandle: string;
  userId: string;
}

type ColumnsType<T> = TableProps<T>["columns"];

interface TableParams {
  pagination?: TablePaginationConfig;
  sortField?: SorterResult<any>["field"];
  sortOrder?: SorterResult<any>["order"];
  filters?: Parameters<GetProp<TableProps, "onChange">>[1];
}

interface userTableDataType {
  organization: string;
  key: number;
  name: string;
  email: string;
  dateCreated: string;
  status: string;
  phoneNumber: string;
  userId: string;
}
