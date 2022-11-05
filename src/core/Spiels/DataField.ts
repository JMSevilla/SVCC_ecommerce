import React from "react";

interface IFieldColumns {
  fieldLabels: {
    id?: any | null;
    category?: string | null;
    details?: string | null;
    image?: string | null;
    name?: string | null;
    price?: string | null;
    action?: any | null;
  };
}

interface IFieldPropertyNames {
  propertyNames: {
    category?: string | null;
    details?: string | null;
    id?: any | null;
    image?: string | null;
    name?: string | null;
    price?: string | null;
  };
}

class FieldColumns implements IFieldColumns, IFieldPropertyNames {
  fieldLabels = {
    id: "ID",
    category: "Category",
    details: "Details",
    image: "Image",
    name: "Name",
    price: "Price",
    action: "Action",
  };
  propertyNames = {
    category: "",
    details: "",
    id: null,
    image: "",
    name: "",
    price: "",
  };
}

export default new FieldColumns();
