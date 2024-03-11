declare({
    schema: "stripe",
    name: "charges"
});

declare({
    schema: "shopify",
    name: "orders"
});

declare({
    schema: "salesforce",
    name: "accounts"
});

["chargess", "subscriptions", "line_items", "invoices"]
.forEach(source => declare({
    schema: "stripe",
    name: source
}));
