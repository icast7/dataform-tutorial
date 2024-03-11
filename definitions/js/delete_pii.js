const pii_tables = ["tablewithdates_gdpr"];
pii_tables.forEach(table =>
    operate(
        `gdpr_cleanup: ${table}`,
        ctx => `DELETE FROM dataform_second_workspace.${table} WHERE EmployeeID in (SELECT EmployeeID FROM dataform_second_workspace.tablewithdates)`
    )
    .tags("gdpr_deletion")
);
