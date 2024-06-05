frappe.ui.form.on("Sales Order", {
	onload(frm) {
        console.log("Hi Im in")
        if (frm.doc.docstatus === 0){
            refactorjs.sales_order.load_offer();
        }
	}
});