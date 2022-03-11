const responseProps = {
  status: {
    type: "string"
  },
  message: {
    type: "string"
  },
  data: {
    type: "object",
    properties: {}
  }
};

const generalResponse = {
  name: "GeneralResponse",
  description: "General error response",
  contentType: "application/json",
  schema: {
    $schema: "http://json-schema.org/draft-04/schema#",
    properties: {
      ...responseProps
    }
  }
};

const unauthorizedResponse = {
  name: "UnauthorizedResponse",
  description: "Unauthorized. Due to missing/invalid tokens in Cookie",
  contentType: "application/json",
  schema: {
    $schema: "http://json-schema.org/draft-04/schema#",
    properties: {
      message: {
        type: "string"
      }
    }
  }
};

const forbiddenResponse = {
  name: "ForbiddenResponse",
  description: "Forbidden. Due to insufficient permissions of the Customer",
  contentType: "application/json",
  schema: {
    $schema: "http://json-schema.org/draft-04/schema#",
    properties: {
      message: {
        type: "string"
      }
    }
  }
};

const errorResponse = {
  name: "ErrorResponse",
  description: "General error response",
  contentType: "application/json",
  schema: {
    $schema: "http://json-schema.org/draft-04/schema#",
    properties: {
      ...responseProps,
      data: {
        type: "object",
        properties: {
          errors: {
            type: "array",
            items: {
              type: "object",
              properties: {
                code: {
                  type: "string"
                },
                message: {
                  type: "string"
                }
              }
            }
          }
        }
      }
    }
  }
};

const customerModel = {
  name: "Customer",
  description: "Customer Profile",
  contentType: "application/json",
  schema: {
    $schema: "http://json-schema.org/draft-04/schema#",
    properties: {
      ...responseProps,
      data: {
        type: "object",
        properties: {
          id: {
            type: "string"
          },
          properties: {
            type: "object",
            properties: {
              address: {
                type: "string"
              },
              city: {
                type: "string"
              },
              date_of_birth: {
                type: "string",
                format: "date"
              },
              driver_license_valid: {
                type: "string",
                enum: ["true", "false"]
              },
              email: {
                type: "string",
                format: "email"
              },
              firstname: {
                type: "string"
              },
              lastname: {
                type: "string"
              },
              mobilephone: {
                type: "string"
              },
              phone: {
                type: "string"
              },
              zip: {
                type: "string"
              }
            }
          },
          associations: {
            type: "object",
            properties: {
              companies: {
                type: "object",
                properties: {
                  results: {
                    type: "array",
                    items: {
                      type: "object",
                      properties: {
                        id: {
                          type: "string"
                        },
                        type: {
                          type: "string"
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
};

const orderStatusProps = {
  type: "array",
  items: {
    type: "object",
    properties: {
      id: {
        type: "string",
        enum: [
          "order_received",
          "vehicle_in_registration",
          "delivery_preparation",
          "delivery_date_confirmed",
          "delivery_completed"
        ]
      },
      title: {
        type: "string"
      },
      success: {
        type: "boolean"
      },
      extra_info: {
        type: "object",
        properties: {
          key: {
            type: "string"
          },
          value: {
            type: "string"
          },
          type: {
            type: "string"
          }
        }
      }
    }
  }
};

const subscriptionProps = {
  id: {
    type: "string"
  },
  properties: {
    type: "object",
    properties: {
      status: {
        type: "string",
        enum: [
          "upload_driver_license",
          "sign_contract",
          "reviewing_order",
          "car_in_production",
          "car_in_registration",
          "car_in_inspection",
          "delivery_in_preparation",
          "car_ready_for_delivery",
          "car_in_delivery",
          "active",
          "renewed",
          "prepare_return",
          "return_arranged",
          "inactive"
        ]
      },
      additional_mileage_fee: {
        type: "string"
      },
      amount: {
        type: "string"
      },
      brand: {
        type: "string"
      },
      car_vin: {
        type: "string"
      },
      color: {
        type: "string"
      },
      contract_end_date: {
        type: "string"
      },
      contract_term_type: {
        type: "string"
      },
      credit_check: {
        type: "string"
      },
      customer_type: {
        type: "string"
      },
      deposit: {
        type: "string"
      },
      engine: {
        type: "string"
      },
      equipment_line: {
        type: "string"
      },
      fuel: {
        type: "string"
      },
      gearbox: {
        type: "string"
      },
      handover_protocol: {
        type: "string"
      },
      has_young_driver: {
        type: "string"
      },
      holder_agreement: {
        type: "string"
      },
      masked_iban: {
        type: "string"
      },
      matched_car: {
        type: "string"
      },
      mileage: {
        type: "string"
      },
      mileage_package_fee: {
        type: "string"
      },
      millage_package: {
        type: "string"
      },
      model: {
        type: "string"
      },
      picture: {
        type: "string"
      },
      power: {
        type: "string"
      },
      recurrent_payment_method: {
        type: "string"
      },
      return_date: {
        type: "string"
      },
      term: {
        type: "string"
      },
      checkout_hash: {
        type: "string"
      },
      checkout_step: {
        type: "string"
      },
      handover_delivery_fee: {
        type: "string"
      },
      handover_firstname: {
        type: "string"
      },
      handover_lastname: {
        type: "string"
      },
      handover_housenumber: {
        type: "string"
      },
      handover_street: {
        type: "string"
      },
      handover_city: {
        type: "string"
      },
      handover_zipcode: {
        type: "string"
      },
      handover_address_extra: {
        type: "string"
      },
      handover_appointment_date: {
        type: "string"
      }
    }
  },
  associations: {
    type: "object",
    properties: {
      contacts: {
        type: "object",
        properties: {
          results: {
            type: "array",
            items: {
              type: "object",
              properties: {
                id: {
                  type: "string"
                },
                type: {
                  type: "string",
                  enum: [
                    "deal_to_contact",
                    "contact_to_deal",
                    "driver_to_contact",
                    "driver_to_task"
                  ]
                }
              }
            }
          }
        }
      }
    }
  },
  status_details: orderStatusProps
};

const subscriptionModel = {
  name: "Subscription",
  description: "Subscription",
  contentType: "application/json",
  schema: {
    $schema: "http://json-schema.org/draft-04/schema#",
    properties: {
      ...responseProps,
      data: {
        type: "object",
        properties: subscriptionProps
      }
    }
  }
};

const subscriptionsModel = {
  name: "Subscriptions",
  description: "List of Subscriptions",
  contentType: "application/json",
  schema: {
    $schema: "http://json-schema.org/draft-04/schema#",
    properties: {
      ...responseProps,
      data: {
        type: "array",
        items: {
          type: "object",
          properties: subscriptionProps
        }
      }
    }
  }
};

const companyProps = {
  id: {
    type: "string"
  },
  properties: {
    type: "object",
    properties: {
      address: {
        type: "string"
      },
      city: {
        type: "string"
      },
      name: {
        type: "string"
      },
      phone: {
        type: "string"
      },
      zip: {
        type: "string"
      }
    }
  }
};

const companyModel = {
  name: "Company",
  description: "Company",
  contentType: "application/json",
  schema: {
    $schema: "http://json-schema.org/draft-04/schema#",
    properties: {
      ...responseProps,
      data: {
        type: "object",
        properties: companyProps
      }
    }
  }
};

const companiesModel = {
  name: "Companies",
  description: "List of Companies",
  contentType: "application/json",
  schema: {
    $schema: "http://json-schema.org/draft-04/schema#",
    properties: {
      ...responseProps,
      data: {
        type: "array",
        items: {
          type: "object",
          properties: companyProps
        }
      }
    }
  }
};

const verificationResponseModel = {
  name: "VerificationResponse",
  description: "Verification Response containing the redirect URL",
  contentType: "application/json",
  schema: {
    $schema: "http://json-schema.org/draft-04/schema#",
    properties: {
      ...responseProps,
      data: {
        type: "object",
        properties: {
          url: {
            type: "string"
          }
        }
      }
    }
  }
};

const documentsProps = {
  id: {
    type: "string"
  },
  files: {
    type: "array",
    items: {
      type: "object",
      properties: {
        url: {
          type: "string" || "null"
        },
        document_type: {
          type: "string"
        }
      }
    }
  }
};

const documentsModel = {
  name: "DocumentsResponse",
  description: "DocumentsResponse",
  contentType: "application/json",
  schema: {
    $schema: "http://json-schema.org/draft-04/schema#",
    properties: {
      ...responseProps,
      data: {
        type: "object",
        properties: documentsProps
      }
    }
  }
};

const CompoundLocationModel = {
  type: "object",
  properties: {
    id: {
      type: "string"
    },
    type: {
      type: "string"
    },
    address_complete: {
      type: "string"
    },
    name_short: {
      type: "string"
    },
    address_name: {
      type: "string"
    },
    address_street: {
      type: "string"
    },
    address_city: {
      type: "string"
    },
    address_zip_code: {
      type: "string"
    },
    address_country: {
      type: "string"
    },
    opening_hour: {
      type: "string"
    },
    closing_hour: {
      type: "string"
    },
    contact_email: {
      type: "string"
    },
    contact_phone_number: {
      type: "string"
    },
    is_return_available: {
      type: "string"
    }
  }
};

const HandoverAddressModel = {
  type: "object",
  properties: {
    first_name: {
      type: "string"
    },
    last_name: {
      type: "string"
    },
    street_name: {
      type: "string"
    },
    house_number: {
      type: "string"
    },
    zipcode: {
      type: "string"
    },
    city: {
      type: "string"
    },
    extra: {
      type: "string"
    }
  }
};

const invoicesProps = {
  id: {
    type: "string"
  },
  url: {
    type: "string"
  },
  amount: {
    type: "number"
  },
  payment_type: {
    type: "string"
  },
  due_date: {
    type: "string"
  },
  payment_status: {
    type: "string"
  },
  currency: {
    type: "string",
    enum: ["eur", "usd"]
  }
};

const invoicesModel = {
  name: "Invoices",
  description: "List of Invoices. Please note that all amounts are in cents",
  contentType: "application/json",
  schema: {
    $schema: "http://json-schema.org/draft-04/schema#",
    properties: {
      ...responseProps,
      data: {
        type: "array",
        items: {
          type: "object",
          properties: invoicesProps
        }
      }
    }
  }
};

const ReturnSubscriptionModel = {
  type: "object",
  properties: {
    record_id: {
      type: "string"
    },
    deal_id: {
      type: "string"
    },
    hs_import_return_date: {
      type: "string",
      format: "date"
    },
    return_type: {
      type: "string",
      enum: ["pickup", "delivery"]
    },
    return_date_confirmed: {
      type: "string",
      format: "date"
    },
    return_time_confirmed: {
      type: "string",
      format: "date"
    },
    link_return_location: {
      type: "string"
    }
  }
};

const ReturnDataModel = {
  name: "ReturnData",
  description: "Return Data",
  contentType: "application/json",
  schema: {
    $schema: "http://json-schema.org/draft-04/schema#",
    properties: {
      ...responseProps,
      data: {
        type: "object",
        properties: {
          return_locations: {
            type: "array",
            items: CompoundLocationModel
          },
          return_price: {
            type: "integer"
          },
          disabled_dates: {
            type: "array",
            items: {
              type: "string",
              format: "date"
            }
          },
          handover_address: HandoverAddressModel,
          subscription: ReturnSubscriptionModel
        }
      }
    }
  }
};

export default [
  generalResponse,
  unauthorizedResponse,
  forbiddenResponse,
  errorResponse,
  customerModel,
  subscriptionModel,
  subscriptionsModel,
  companyModel,
  companiesModel,
  verificationResponseModel,
  documentsModel,
  invoicesModel,
  ReturnDataModel,
];
