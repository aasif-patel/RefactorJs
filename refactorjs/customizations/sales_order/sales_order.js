frappe.ui.form.on("Sales Order", {
	refresh(frm) {
        if (frm.doc.docstatus === 0){
            refactorjs.sales_order.load_offer();
        }
	}
});