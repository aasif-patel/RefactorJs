import frappe
from frappe.utils import getdate, today

@frappe.whitelist()
def get_active_offer():
    now = getdate(today)
    all= frappe.db.get_all(
                    "Coupon Code", 
                    filters=[
                        ["valid_from",'<=',now],
                        ["valid_upto",'>=',now]
                    ],
                    fields=["description", "name"],
    )
    if len(all) == 0:
        return None
    return all
