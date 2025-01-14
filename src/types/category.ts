export type TCategory = {
  cate_id: number;
  cate_name: string;
  cate_name_eng?: any;
  type: number;
  is_displayed: boolean;
  is_displayed_website: boolean;
  is_extra: boolean;
  is_container : boolean;
  childs: any;
  display_order: number;
  store_id?: any;
  parent_cate_id?: any;
  position: number;
  active: boolean;
  brand_id: number;
  product_category_code?: any;
};
