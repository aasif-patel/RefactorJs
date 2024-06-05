frappe.provide("refactorjs.sales_order");

refactorjs.sales_order.load_offer = function () {
    frappe.call({
        method:"refactorjs.customizations.sales_order.api.offer_detail.get_active_offer",
        callback:function(r){
            if(r.message){
                var intro = 'Available Offer for you..<br>'
                r.message.forEach(e => {
                    if (e.description){
                        intro = intro + e.description
                    }else{
                        intro = intro + e.name
                    }
                });
            }else{
                var intro = null
            }
            if (intro){
                cur_frm.set_intro(intro);
            }
        }
    })
};