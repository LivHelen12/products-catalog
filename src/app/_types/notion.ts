export type NotionDatabaseResponse = {
  object: string
  results: Result[]
  next_cursor: any
  has_more: boolean
  type: string
  page_or_database: PageOrDatabase
  request_id: string
}

export type Result = {
  object: string
  id: string
  created_time: string
  last_edited_time: string
  created_by: CreatedBy
  last_edited_by: LastEditedBy
  cover: any
  icon: any
  parent: Parent
  archived: boolean
  properties: Properties
  url: string
  public_url: any
}

export type CreatedBy = {
  object: string
  id: string
}

export type LastEditedBy = {
  object: string
  id: string
}

export type Parent = {
  type: string
  database_id: string
}

export type Properties = {
  sku: Sku
  image: Image
  availability: Availability
  subType: SubType
  type: Type
  quantity: Quantity
  salesPrice: SalesPrice
  supplier: Supplier
  description: Description
  name: Name
}

export type RichText = {
  type: string
  text: Text
  annotations: Annotations
  plain_text: string
  href: any
}

export type Text = {
  content: string
  link: any
}

export type Annotations = {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export type Sku = {
  id: string
  type: string
  rich_text: RichText2[]
}

export type RichText2 = {
  type: string
  text: Text2
  annotations: Annotations2
  plain_text: string
  href: any
}

export type Text2 = {
  content: string
  link: any
}

export type Annotations2 = {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export type Image = {
  id: string
  type: string
  url: string
}

export type Availability = {
  id: string
  type: string
  multi_select: MultiSelect[]
}

export type MultiSelect = {
  id: string
  name: string
  color: string
}

export type RichText3 = {
  type: string
  text: Text3
  annotations: Annotations3
  plain_text: string
  href: any
}

export type Text3 = {
  content: string
  link: any
}

export type Annotations3 = {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export type SubType = {
  id: string
  type: string
  select: Select
}

export type Select = {
  id: string
  name: string
  color: string
}

export type Type = {
  id: string
  type: string
  select: Select2
}

export type Select2 = {
  id: string
  name: string
  color: string
}

export type Quantity = {
  id: string
  type: string
  number: number
}

export type RichText4 = {
  type: string
  text: Text4
  annotations: Annotations4
  plain_text: string
  href: any
}

export type Text4 = {
  content: string
  link: any
}

export type Annotations4 = {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export type SalesPrice = {
  id: string
  type: string
  number: number
}

export type Supplier = {
  id: string
  type: string
  rich_text: RichText5[]
}

export type RichText5 = {
  type: string
  text: Text5
  annotations: Annotations5
  plain_text: string
  href: any
}

export type Text5 = {
  content: string
  link: any
}

export type Annotations5 = {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export type Description = {
  id: string
  type: string
  rich_text: RichText6[]
}

export type RichText6 = {
  type: string
  text: Text6
  annotations: Annotations6
  plain_text: string
  href: any
}

export type Text6 = {
  content: string
  link: any
}

export type Annotations6 = {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export type Name = {
  id: string
  type: string
  title: Title[]
}

export type Title = {
  type: string
  text: Text7
  annotations: Annotations7
  plain_text: string
  href: any
}

export type Text7 = {
  content: string
  link: any
}

export type Annotations7 = {
  bold: boolean
  italic: boolean
  strikethrough: boolean
  underline: boolean
  code: boolean
  color: string
}

export type PageOrDatabase = {}
