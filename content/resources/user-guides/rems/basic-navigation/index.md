---
title: "REMS Basic Navigation"
date: 2025-01-19T11:34:45+11:00
draft: false
description: "A guide for navigating the various sections of the LDaCA REMS interface."
---

<br>

##### [LDaCA REMS Top Menu](#ldaca-rems-top-menu)

##### [LDaCA REMS Interface](#ldaca-rems-interface)

<br>

## LDaCA REMS Top Menu

Once logged in to {{< glossary_link display="REMS" id="rems" >}}, the menu items you can access will depend on your user role(s). The user roles include:

<br>

| Role          | Description                                                                                                                                                                                                                                                                                                                                                                  |
| ------------- | ---------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **Owner**     | Also Resource Owner. A user who (a) has {{< glossary_link display="data governance" id="data-governance" >}} authority (e.g. the data owner, {{< glossary_link display="data steward" id="data-steward" >}} or similar designation) to manage access to restricted data and (b) is assigned the technical role Owner in the REMS tool by LDaCA REMS system administrator(s). |
| **Handler**   | Also Approver. A role assigned by an Owner to a user who is responsible for processing the applications to resources. Processing includes approving or rejecting the applications and, if needed, requesting decisions and reviews from an approver within their organisation. Handlers can also revoke an Applicant's access rights in case of misuse.                      |
| **Applicant** | A user who applies for entitlement to a resource, i.e. {{< glossary_link display="data license" id="data-license" >}}, by submitting an application form.                                                                                                                                                                                                                    |

<br>

**Owners** have access to the **_Catalogue_**, **_Applications_**, **_Actions_**, **_Administration_** and **_About_** menus.

{{< image Src="/user-guides/rems/Owner-TopMenu.png" Alt="REMS Owner: Top Menu" Desc="REMS Owner: Top Menu" Title="REMS Owner: Top Menu" Ref="LDaCA" >}}

<br>

However, if they are not assigned as Handler for any resource, they will not have access to the **_Actions_** menu where records of open and processed applications can be accessed.

{{< image Src="/user-guides/rems/Owner-NotHandler-TopMenu.png" Alt="REMS Owner: Top Menu without Handler Permissions" Desc="REMS Owner: Top Menu without Handler Permissions" Title="REMS Owner: Top Menu without Handler Permissions" Ref="LDaCA" >}}

<br>

Therefore, it is recommended that Owners assign themselves as Handler for their resource even if there are other designated Handlers so they are notified of application submissions and can review any of the application records. Handler assignment can be changed by an Owner in the _Workflow_ window at any time.

<br>

**Handlers** also have access to the **_Catalogue_**, **_Applications_**, **_Actions_**, **_Administration_** and **_About_** menus but within each menu they will see only the items they have been assigned to, while some edit functions are not available to them, e.g. they can view the Workflow of a resource but will not be able to edit the Handler field.

<br>

**Applicants** have access to **_Catalogue_**, **_Applications_** and **_About_** only, unless they are also assigned a role by an Owner (e.g. as Handler) in which case they will have access to the **_Actions_** and **_Administration_** menus as well.

<br>

## LDaCA REMS Interface

The screenshots below show the type of content found in the **_Catalogue_**, **_Applications_**, **_Actions_**, **_Administration_** and **_About_** sections. These are from our test site and the items listed were created for testing purposes only.

<br>

### Catalogue

Catalogue lists resources (licenses) that users can apply for.

{{< image Src="/user-guides/rems/REMS-Interface-Catalogue.png" Alt="REMS Interface: Catalogue" Desc="REMS Interface: Catalogue" Title="REMS Interface: Catalogue" Ref="LDaCA" >}}

<br>

### Applications

Applications lists all the applications that this user (who is signed in) initiated or submitted.

{{< image Src="/user-guides/rems/REMS-Interface-Applications.png" Alt="REMS Interface: Applications" Desc="REMS Interface: Applications" Title="REMS Interface: Applications" Ref="LDaCA" >}}

<br>

### Actions

Actions lists all open and processed applications that this user has the authority to handle.

{{< image Src="/user-guides/rems/REMS-Interface-Actions.png" Alt="REMS Interface: Actions" Desc="REMS Interface: Actions" Title="REMS Interface: Actions" Ref="LDaCA" >}}

<br>

### Administration

Administration allows Owners and Handlers to create, edit and work with records in the sub-sections **_Catalogue items_**, **_Resources_**, **_Forms_**, **_Workflows_**, **_Licenses_**, **_Reports_**, **_Deny List_** and **_Organizations_**.

{{< image Src="/user-guides/rems/REMS-Interface-Administration.png" Alt="REMS Interface: Administration" Desc="REMS Interface: Administration" Title="REMS Interface: Administration" Ref="LDaCA" >}}

<br>

### About

About displays basic information about LDaCA {{< glossary_link display="REMS" id="rems" >}}.

{{< image Src="/user-guides/rems/REMS-Interface-About.png" Alt="REMS Interface: About" Desc="REMS Interface: About" Title="REMS Interface: About" Ref="LDaCA" >}}

<br>
