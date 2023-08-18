import { IPadData } from "../services/slices/wellsSlice"

interface IWellsOnStatus {
  subsidiary: string
  bush: string
  well: string
}

export interface ICardProps<T> {
  data: T
  page: number
  setPage: (index: number) => void
  length: number
}

export interface IContractorsResponse {
  id: number
  dd_contractor_name: string
  email: string
  phone: string
}
export interface IFieldsResponse {
  id: number,
  field:string
}

export interface IContractorData {
  id: number
  dd_contractor_name: string
  email: string
  phone: string
}

export interface ICustomerData {
  id: number
  full_name: string
  color?: string
  slug?: string
}

export interface IWellData {
  id: number
  author?: number
  customer: number
  contractor: string
  field_name: string
  pad:object
  rig: string
  well_number: string
  status: string
  contractor_id?: number
  start_date?: string
  plan_depth?: number
}

export type TAddContractor = {
  name: string
}
export interface ICustomInputProps<T> {
  type?: string
  style?: object
  label: string
  extraLabel?: string
  name?: string
  value?: string | number |  string[] 
  value_status?:string[]
  placeholder?: string
  data?: string[]
  blue?: boolean
  setValue?: any
  statusArr?: any
  generalArr?: any
  staticArr?: any
  customersArr?: any
  padsArr?: any
  id?: string
  onChange?: (e: React.ChangeEvent<T>) => void
  onChangeField?: (e: React.ChangeEvent<T>) => void
  setShowLogin?: (show: boolean) => void
  setShowResetPass?: (show: boolean) => void
  children?:Node
}

export interface IWellsResponse {
  readonly id: number
  readonly client_name: string
  readonly contractorNNB: string
  well_name: string
  field_name:string
  active_from: number
  status_drilling: "PLAN" | "NOTA" |"ACTV"| "STOP" |"FINI"
  status:"ACTV" | "NOACT" 
  in_statistics: boolean
  well_type: string
  RKB: number
  VSaz: number
  coordinate_system: string
  latitude: number
  longtitude: number
  NY: number
  EX: number
  north_direction: string
  geomagnetic_model: string
  geomagnetic_date: string
  btotal: number
  dip: number
  dec: number
  grid_convergence: number
  total_correction: number
  gtotal: number
  T1_start: string
  T1_end: string
  T3_start: string
  T3_end: string
  critical_azimuth: boolean
  comment: string
  mail_To: string
  mail_Cc: string
  pad_name:number
  }

export type TAddWell = Omit<IWellData, "id">

export type TAddNewWell = Omit<TAddWell, "author">

export type TUserRegister = {
  firstName?: string
  lastName?: string
  email?: string
  password?: string
  organization?: string
}

export type TWell = {
  well_name?: string
  active_from?: number | null
  status?: "PLAN" | "NOTA" | "ACTV" | "FINI"
  in_statistics?: boolean
  well_type?: "VNS0" | "NNS0" | "ZBS0" | "BGS0"
  RKB?: number | null
  coordinate_system?: string
  latitud?: number | null
  longtitude?: number | null
  NY?: number | null
  EX?: number | null
  north_direction?: "GRID" | "TRUE" | "MAGN"
  geomagnetic_model?: string
  geomagnetic_date?: Date | null
  btotal?: number | null
  dip?: number | null
  dec?: number | null
  grid_convergence?: number | null
  total_correction?: number | null
  gtotal?: number | null
  T1_start?: Date | null
  T1_end?: Date | null
  T3_start?: Date | null
  T3_end?: Date | null
  critical_azimuth?: boolean
  comment?: string
  pad_name?: string
}

export interface TCustomer {
  name?: string
  color?: string
  slug?: string
}

export type TLoginProfile = Pick<TUserRegister, "email" | "password">
