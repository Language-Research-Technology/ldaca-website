---
title: "REMS Owner Guide"
date: 2025-01-18T15:18:23+11:00
draft: false
description: "A guide for the options and tasks available in LDaCA REMS to users with the Owner role."
---

<br>

The LDaCA {{< glossary_link display="REMS" id="rems" >}} system administrator assigns the Resource Owner role to {{< glossary_link display="data stewards" id="data-steward" >}} or their designated persons.

A Resource Owner can set up license approval workflows and manage resource entitlement processes.

<br>

## Listing a new catalogue item

To set up a new resource entitlement in the tool, the Owner must list a catalogue item. This is done by creating the following in the given order:

##### [1. Organization](#1-organization-1)

##### [2. License](#2-license-1)

##### [3. Form](#3-form-1)

##### [4. Resource](#4-resource-1)

##### [5. Workflow](#5-workflow-1)

##### [6. Catalogue Items](#6-catalogue-items-1)

<br>

### 1. Organization

**In brief: Check first if the required organization is already listed and use it, otherwise create a new organization.**

An organization is the custodial organization of the resource (i.e. the license) being managed, e.g. Australian National University. An organization may be connected to multiple resources.

<br>

#### 1.1 Create an Organization

- Log in to LDaCA REMS.
- Select the top menu, **_Administration_**, then the sub-menu item **_Organizations_**.

{{< image Src="/user-guides/rems/AdministrationMenu-Organization.png" Alt="REMS: Administration Sub-Menu" Desc="REMS: Administration Sub-Menu" Title="REMS: Administration Sub-Menu" Ref="LDaCA" >}}

<br>

- Check if the organization is already listed by browsing the list or by using the search box to find a known organization by name.
  - If the organization is listed:
    - Select **_View_** on the right-hand side and check that the details are correct.
    - Go to the next step, **_Create a License_** (in _Organizations_).
  - If the required organization is not listed, create a new organization.
- To create a new organization, select **_Create organization_**.
- Fill in the fields in the _Create organization_ window:

{{< image Src="/user-guides/rems/CreateOrganization.png" Alt="REMS: Create Organization" Desc="REMS: Create Organization" Title="REMS: Create Organization" Ref="LDaCA" >}}

<br>

- **Id**: Enter an identifier for the organization. Choose a short, one-word, easily recognisable ID. Letters (upper- or lowercase), numbers, hyphens and underscores are allowed. Avoid special characters.
  - If the Id you entered is already in use, a warning text will display upon attempting to save the record:

{{< image Src="/user-guides/rems/REMS-Orgs-Failed-IDAlreadyInUse.png" Alt="REMS: Organization ID Already in Use" Desc="REMS: Organization ID Already in Use" Title="REMS: Organization ID Already in Use" Ref="LDaCA" >}}

<br>

- A new organization record will save, even if the Short Name, Title and/or Owners are already in use, as long as the Id is not yet in use.

> The Id field cannot be edited once the record is saved.

- **Short Name**: Create a short name for the organization - this will display in the _Organizations_ list. Enter a one-word name; hyphens and underscores are allowed.
- **Title**: Enter the full name of the organization - this will display in the _Organizations_ list. Spaces are allowed.
- **Owners**: (Optional) Choose from the drop-down list of Owners.
- **Review emails**: (Optional) Click **_Add_** to enter a name and an email address where license applications may be sent for review prior to approval.
- Click **_Save_** when done.

> - The record will save even if the _Owners_ and _Review emails_ fields are left blank, but it is recommended that you enter information in one of these fields before saving the record.
> - If the required name is not listed in _Owners_, use the _Review emails_ option to add a new email address.

<br>

#### 1.2 Edit an Organization

- Go to **_Administration_** > **_Organizations_**
- Locate the relevant organization from the list.
- Select **_View_** on the right-hand side to display the record.
- In the record, select **_Edit_** at the bottom right-hand side.
- Make the necessary changes in any editable field.
- Click **_Save_** when done.

<br>

#### 1.3 Disable or Archive an Item

> The **_Disable_** and **_Archive_** functions are available for items in _Organizations_, _Licenses_, _Forms_, _Workflows_, _Resources_ and _Catalogue_.
>
> - Disable an item to hide it from Applicants.
> - Archive an item to hide it from Applicants and in the administration view as well.

Access the **_Disable_** and **_Archive_** buttons either:

- Directly from the items list; buttons are in the rightmost columns
- By selecting **_View_** from the items list to display the item record where the buttons are in the bottom right-hand corner.

> The buttons may appear grey, but are clickable.

{{< image Src="/user-guides/rems/Organization-DisableArchive.png" Alt="REMS: Organization Disable and Archive Buttons" Desc="REMS: Organization Disable and Archive Buttons" Title="REMS: Organization Disable and Archive Buttons" Ref="LDaCA" >}}

<br>

- To hide an item from Applicants, select **_Disable_**.
  - The **_Disable_** button toggles to **_Enable_**, allowing either action to be reversed.

{{< image Src="/user-guides/rems/Organization-Disable-Enable.png" Alt="REMS: Organization Disable and Enable Buttons" Desc="REMS: Organization Disable and Enable Buttons" Title="REMS: Organization Disable and Enable Buttons" Ref="LDaCA" >}}

<br>

- To hide an item in the administration view as well, select **_Archive_**.
  - The **_Archive_** button toggles to **_Unarchive_**, allowing either action to be reversed.
- To display archived items, tick the **_Display archived_** box (above the list at right).

> Ticking **_Display archived_** does not remove the item from the archived state.

{{< image Src="/user-guides/rems/Organizations-ArchiveUnarchive.png" Alt="REMS: Organization Archive and Unarchive Buttons" Desc="REMS: Organization Archive and Unarchive Buttons" Title="REMS: Organization Archive and Unarchive Buttons" Ref="LDaCA" >}}

<br>

### 2. License

**In brief: Confirm if the required license has already been listed by your organization and is suitable to reuse for your purposes, otherwise create a new license.**

> A license record cannot be edited after it is saved.

<br>

- Go to **_Administration_** > **_Licenses_**
- Check if the license is already listed by browsing the list or by using the search box to find a known license by name.
  - If listed, select **_View_** and check if the details are correct for your purposes.
  - If reusing this license, go to the next step, [3. Form](#3-form-1).
- To create a new license:
  - Click on **_Create license_**.
  - Fill in the fields:
  - **Organization**: Choose your organization from the drop-down list.
  - **License type**: Always select External link. The License link field will display.
  - **License link**: Enter the URL of the license document.
  - **Title**: Enter the name of the license.
  - Click **_Save_** when done.

{{< image Src="/user-guides/rems/CreateLicense.png" Alt="REMS: Create License" Desc="REMS: Create License" Title="REMS: Create License" Ref="LDaCA" >}}

<br>

#### 2.2 Manage a License

Once a license record is saved, the values in the fields are no longer editable.

If there are errors in the saved license, you can disable and archive it (see [1.3 Disable or Archive an item](#13-disable-or-archive-an-item)) and create a new license.

<br>

### 3. Form

**In brief: Decide if the default form (explained below) is suitable and adequate for your purposes. If so, you do not have to create a new form. REMS will automatically launch the default form for Applicants. Alternatively, you can create a new form by building on the default form using different form fields.**

In LDaCA REMS, a form is the license application form or interface through which an Applicant may view the license, accept the terms and submit the application for approval.

Owners can create a customised form with additional fields that can, for example, ask the Applicant to provide more information (e.g. contact information, copy of a research proposal, answers to a questionnaire). Permissions are granted only when the Resource Owner ({{< glossary_link display="data steward" id="data-steward" >}} or their designated Handler or Approver) approves the application.

<br>

#### 3.1 Default License Application Form

A default license application form is generated in LDaCA REMS when **no form** is connected to a catalogue item:

{{< image Src="/user-guides/rems/REMS-NoForm.png" Alt="REMS: No Form" Desc="REMS: No Form" Title="REMS: No Form" Ref="LDaCA" >}}

<br>

Below is the Applicant's view of the default license application form:

{{< image Src="/user-guides/rems/REMS-DefaultApplicationForm.png" Alt="REMS: Default License Application Form" Desc="REMS: Default License Application Form" Title="REMS: Default License Application Form" Ref="LDaCA" >}}

<br>

This form is suitable for a basic workflow where an application is done in three steps:

1. Log in to the [LDaCA Portal](https://data.ldaca.edu.au) and LDaCA REMS;
2. Confirm acceptance of the license terms by clicking **_Accept license_**;
3. Submit the license application by selecting **_Submit application_**.

{{< image Src="/user-guides/rems/REMS-SubmitApplication.png" Alt="REMS: Workflow for Default License Application Form" Desc="REMS: Workflow for Default License Application Form" Title="REMS: Workflow for Default License Application Form" Ref="LDaCA" >}}

<br>

The Resource Owner should inform LDaCA staff whether license applications will be manually approved by a Handler or by an Approver Bot (automated).

If using the default form, go to the next step, [4. Resource](#4-resource-1).

<br>

#### 3.2 Create or Edit a Form

**In brief: Create a form template using various types of fields.**

The default form can be used as a base template to build on by adding various types of fields to create a custom form that requires more information from the Applicant, e.g. purpose(s) of data use, description of the research project, names of co-researchers.

<br>

##### Reuse an Existing Form

> You can only edit the form as long as it has not been connected to a catalogue item. An alert text will display if you attempt to edit a form that has been connected to a catalogue item.

- Go to **_Administration_** > **_Forms_**
- To reuse a previously created form exactly as it is:
  - Locate the form in the list
  - Select the form's **_View_** button and note the details.
  - Go to the next step, [4. Resource](#4-resource-1).
- To reuse a listed form as a template for making a new form, select **_Copy as New_**.
  - Add elements to create a new form.
  - Click **_Save_** when done.

{{< image Src="/user-guides/rems/REMS-ReuseExistingForm.png" Alt="REMS: Reuse an Existing Form" Desc="REMS: Reuse an Existing Form" Title="REMS: Reuse an Existing Form" Ref="LDaCA" >}}

<br>

##### Create a Completely New Form

- To create a completely new form based on the default form, click on **_Create form_**.
- Fill in the _Organization_, _Name_ and _Title_.

{{< image Src="/user-guides/rems/REMS-CreateForm.png" Alt="REMS: Create Form" Desc="REMS: Create Form" Title="REMS: Create Form" Ref="LDaCA" >}}

<br>

> You can save the form at this point and continue editing it another time. Remember that you can only edit this form as long as it has not been connected to a catalogue item.

- Click on **_+ Add field_** to display the different types of fields available.
- The image below shows the 2-panel window that appears after clicking on **_+ Add field_**: _Field 1_ on the left where you combine fields and select options, and the _Preview_ on the right that shows what the selected field/option would be like.
- Select a _Field type_ - in the image below, the **_Application title_** field is selected.
- Below _Field type_ are the _Optional fields_: _Field description_, _Placeholder text_ and _Additional settings_. By default, these are initially hidden (collapsed) but are shown expanded in the image. The _Privacy_ and _Visible_ drop-down options are also shown.
- Depending on the _Field type_ selected, different elements appear below the optional text fields and the _Preview_ panel.

{{< image Src="/user-guides/rems/Forms-AppTitleFieldBox.png" Alt="REMS: Field 1 Example Form" Desc="REMS: Field 1 Example Form" Title="REMS: Field 1 Example Form" Ref="LDaCA" >}}

<br>

The fields are briefly described below (CSC REMS Manual, 2021):

**Field types**

- **Application title**: Allows Applicants to provide a name for their application.
- **Text field**: Accepts a line of text and sets a maximum character length in the _Additional settings_ options.
- **Text area**: Accepts a longer line of text; set maximum character length in the _Additional settings_ options.
- **Option list**: Applicants can choose one from a given set of options; you set up the options one at a time using the **_+ Add option_** feature.
- **Multi-select list**: Allows Applicants to choose one or more from the given options; you set up the options one at a time using the **_+ Add option_** feature.
- **Table**: You set up a set of columns and at least a row; the Applicant can add rows as needed.
- **Date field**: Provides a formatted date entry field (DD/MM/YYYY) and a date picker calendar widget.
- **Email address**: Validates the email the Applicant has provided.
- **Phone number**: Takes a phone number in an international format (E.164), e.g. +14155552671.
- **IP address**: Validates the IP address the Applicant has provided in IPv4 or IPv6 forms. The IP address must not be within the known private range.
- **Attachment**: Allows one or multiple attachments of up to 10KB each only. The _Preview_ shows the uploadable file formats:

{{< image Src="/user-guides/rems/PreviewAttachments.png" Alt="REMS: Form Attachment Preview" Desc="REMS: Form Attachment Preview" Title="REMS: Form Attachment Preview" Ref="LDaCA" >}}

<br>

- **Label**: A descriptive text to give the Applicant additional information or instructions regarding some field.
- **Header**: Can be used to divide the application form into sections.
- **Optional field**: [tick box].

**Optional fields and sub-options**

- **Field description**: (Optional)
- **Placeholder text**: (Optional) Can be added to most of the fields. Placeholders are grey text that are temporary and show an example of the type or format of data input expected.
- **Additional settings**: (Optional)
  - Field ID
  - Maximum length in characters (Optional)
- **Privacy**:
  - Public
  - Private
- **Visible**:
  - Always
  - Only if

> The form can only be tested once it is enabled. The Resource Owner can test the form by using a different login account (use a different browser to avoid login issues). Simulate Applicant actions by accessing the relevant restricted data {{< glossary_link display="object" id="object" >}} in the LDaCA Portal and go through each step of the application process.

<br>

#### 3.3 Disable or Archive a Form

To disable, archive or hide a form, refer to [1.3 Disable or Archive an Item](#13-disable-or-archive-an-item).

<br>

### 4. Resource

LDaCA REMS manages {{< glossary_link display="data license" id="data-license" >}} entitlement, hence the resources are the licenses.

> Linking the license to data {{< glossary_link display="objects" id="object" >}} is done in the backend for Resource Owners by LDaCA.

<br>

#### 4.1 Create a Resource

> You cannot edit the resource after you have created and saved it. You can disable and archive a superseded resource and create a new one.

- In **_Administration_** > **_Resources_**, select **_Create resource_**. A blank _Create resource_ window appears:

{{< image Src="/user-guides/rems/REMS-CreateResource.png" Alt="REMS: Create Resource" Desc="REMS: Create Resource" Title="REMS: Create Resource" Ref="LDaCA" >}}

<br>

- Fill in the fields _Organization_, _Resource identifier_ and _Licenses_.
  - **Organization**: select from the drop-down list.
  - **Resource identifier**: enter a unique identifier for the resource which is the license. This can be the URL of the license document.
  - **Licenses**: select from the drop-down list.
- Click **_Save_** when done. The resource is now added to the _Resources_ list.

<br>

#### 4.2 Disable or Archive a Resource

Refer to [1.3 Disable or Archive an Item](#13-disable-or-archive-an-item).

<br>

#### 4.3 Managing the Deny List

The Deny List is a list of blocked users. View this list in **_Administration_** > **_Deny List_**.

> Deny listing is always connected to a certain resource. This means that a user can still apply for access to other resources even if they have been blocked from applying to a certain resource.

The difference between revoking a user's entitlement and simply adding a user to the Deny List:

- Revoking a user's entitlement to a resource prevents the user from accessing the data protected by the license and also adds the user to the Deny List. See procedure [Revoke Entitlements](#revoke-entitlements).
- Directly adding a user to the Deny List of a resource does not automatically block access to the data by a user that has previously been granted permissions. The Owner and Handler(s) are notified if anyone in the Deny List applies for access rights to the same resource.

> You can automatically reject new applications from denied users by adding Rejecter Bot in the Handler field of the resource's workflow (see [5 Workflows](#5-workflow-1)).

<br>

##### Revoke Entitlements

Handlers and Resource Owners assigned as Handlers can revoke a user's resource entitlements e.g. if users misuse their access rights.

You can access the Revoke entitlement action from the relevant application form. It helps to know the application ID (which is in the format YYYY/##, e.g. 2024/28), otherwise perform a search or browse the _Processed applications_ list from the **_Actions_** menu (explained below).

To revoke entitlement for a resource:

- Go to the top menu item **_Actions_** > **_Processed applications_** > **_Show more_**
- Locate the application from the list by _Id_, or by _Resource_ and _Applicant_
- Click the row's **_View_** button to display the relevant application form
- In the application form's _Actions_ section, select **_Revoke entitlement_**
- In the _Revoke entitlement_ window, add a comment with the reason for revoking entitlement.

> It is important to document the reason for revoking entitlement – provide this information and related details in the _Comment_ text field. The information provided will be saved and available only from the application record. Comments are not sent via the standard email notifications.

{{< image Src="/user-guides/rems/RevokeEntitlement.png" Alt="REMS: Revoke Entitlement" Desc="REMS: Revoke Entitlement" Title="REMS: Revoke Entitlement" Ref="LDaCA" >}}

<br>

- Upload an attachment file (maximum 10KB) if necessary
- Click **_Revoke entitlement_**.

<br>

##### Adding or Removing Users from the Deny List

To directly add users to a resource's Deny List:

- Go to **_Administration_** > **_Resources_**
- Find the resource (license) the Applicant has misused (you can use the Search field)
- Select the **_View_** button - the Resource record will display
- Go to the _Deny List_ section
- From the _User_ field's drop-down list, select the name of the user
- In the _Comment_ field, type in a comment, e.g. reason for adding the user to the Deny List
- Click **_Add_**.

To remove users from the Deny List, do one of the following:

- In **_Administration_** > **_Deny List_**, locate the blocked user for the relevant resource and click the **_Remove_** button.
- In **_Administration_** > **_Resources_**, locate the relevant resource and click **_View_** at right. In the _Resource_ window, scroll down to the _Deny List_ section, locate the user and click **_Remove_**.

Once removed from the Deny List, the user regains the permissions that had been approved in the past. Otherwise, they can apply for permissions again if their application was rejected.

<br>

### 5. Workflow

The Resource Owner must create a workflow for their resource (i.e. the {{< glossary_link display="data license" id="data-license" >}}). In a workflow, the Owner must assign Handlers and connect the workflow to a form and license.

<br>

#### 5.1 Create a Workflow

<br>

##### About Handler Bots

Handlers are assigned in the workflow, and therefore it is important to be familiar with the types of Handler Bots available in LDaCA REMS (which can be found in the _Handlers_ drop-down selection list).

- **Approver Bot**: Automates the approval of license applications. It will approve a submitted application if the Applicant accepts the license terms.
- **Rejecter Bot**: Automatically rejects applications from users who are in the Deny List for the resource in question.
- **Expirer Bot**: Removes applications and sends a notification email to Applicants and Handlers about the impending expiration of an entitlement, if applicable.

##### Create a Workflow

- Go to **_Administration_** > **_Workflows_**
- Select **_Create workflow_**
- The _Create workflow_ window displays:

{{< image Src="/user-guides/rems/REMS-CreateWorkflow.png" Alt="REMS: Create Workflow" Desc="REMS: Create Workflow" Title="REMS: Create Workflow" Ref="LDaCA" >}}

<br>

- Fill in the fields:
  - **Organization**: Select from the drop-down list
  - **Title**: Enter a title for your workflow. This title will be displayed in the Title column of the _Workflows_ list.
  - Choose a workflow type:
    - **Default workflow**: The Handler is in full control of the application process. The Handler may request reviews and decisions from others as needed.
      - Resource Owners can assign themselves or other persons as Handlers.
      - Adding the Approver Bot as Handler automates the approval of license applications. See more in [About Handler Bots](#about-handler-bots).
    - **Decider workflow**: The Handler does not have the authority to approve or reject, but only a separate Decider does.
  - **Handlers**: A role assigned by an Owner to a user who is responsible for approving or rejecting the applications to resources. Handlers can also revoke an Applicant's access rights in case of misuse.
    - Choose from the Handlers selection drop-down list
    - Resource Owners may assign themselves as Handler, too, in order to receive notifications about license applications (see [REMS Notifications](../notifications)).
  - **Forms**: Select the relevant form from the drop-down list of forms.
  - **Licenses**: Select the relevant license from the drop-down list of licenses.
- Click **_Save_** when done.

> Let people know they have been assigned a Handler role; REMS does not send out notifications about this. Having multiple Handlers is recommended to help expedite the approval process. Add Handler Bots according to your choice of Default or Decider workflow.

<br>

#### 5.2 Edit a Workflow

Once a Workflow record is saved, you can no longer edit the workflow type (Default or Decider), nor the values in the _Forms_ and _Licenses_ fields.

> Only those assigned the role of _Owner_ or _Resource Owner_ can edit the editable fields _Organization_, _Title_ and _Handlers_.

To edit the values in the _Organization_, _Title_ and _Handlers_ fields:

- In **_Administration_** > **_Workflows_**, locate the required workflow and select its **_Edit_** button
- Click into the relevant (editable) field and edit as necessary
- Click **_Save_** when done.

<br>

#### 5.3 Disable or Archive a Workflow

To disable or archive a workflow, refer to [1.3 Disable or Archive an Item](#13-disable-or-archive-an-item).

<br>

### 6. Catalogue Items

A catalogue item is a resource that has been configured with a workflow, license and form, and made available for users to request an entitlement.

Catalogue items are listed in two places:

- Through the top-level menu **_Catalogue_** - this list can be accessed by Applicants, Handlers and Owners
- Via **_Administration_** > **_Catalogue Items_** - the internal view, not available to Applicants.

In **_Administration_** > **_Catalogue items_**, each item listed shows its components: _Organization_, _Title_, _Resource_, _Form_, _Workflow_, date _Created_ and an _Active_ checkbox, along with **_View_**, **_Edit_**, **_Disable_** and **_Archive_** buttons.

{{< image Src="/user-guides/rems/Admin-CatalogueItems.png" Alt="REMS: Catalogue Items" Desc="REMS: Catalogue Items" Title="REMS: Catalogue Items" Ref="LDaCA" >}}

<br>

#### 6.1 Create a Catalogue Item

Ensure that you have the required elements of a catalogue item in LDaCA REMS, i.e. organization, license, form (whether the default or a custom form), resource and workflow.

- In **_Administration_** > **_Catalogue items_**, select **_Create catalogue item_**
- Fill in the fields in the _Create catalogue item_ window:

{{< image Src="/user-guides/rems/REMS-CreateCatalogueItem.png" Alt="REMS: Create Catalogue Item" Desc="REMS: Create Catalogue Item" Title="REMS: Create Catalogue Item" Ref="LDaCA" >}}

<br>

- **Organization**: Select a listed organization from the drop-down list.
- **Title**: Enter a title for the catalogue item. Choose a title that will make the item easily identifiable in the Catalogue Items list.
- **More info URL (optional)**: If desired, provide a description summary or more information about this catalogue item (e.g. purpose, intended group of users) and the items that comprise it.
- **Workflow**: Select the relevant workflow from the drop-down list.
- **Resource**: Select the relevant resource from the drop-down list.
- **Form (optional)**: Select the relevant form from the drop-down list, or leave it blank if using the default form.
- **Categories**: It is fine to leave this as "No categories". This feature is useful for categorising items, e.g. by organization, when numerous items are linked to it.
- Click **_Save_** when done.

> You will need to activate or enable a newly saved Catalogue Item (see below) to make it available for Applicants. Once a Catalogue Item record is saved, the _Workflow_, _Resource_ and _Form_ fields can no longer be edited. The _Organization_, _Title_, _More info URL (optional)_ and _Categories_ fields remain editable.

To enable or make active the newly created Catalogue item:

- In **_Administration_** > **_Catalogue items_**, locate the relevant Catalogue item from the list
- Either select **_Enable_** or tick the **_Active_** checkbox.

<br>

#### 6.2 Edit a Catalogue Item

> Only those assigned the role of Owner or Resource Owner have edit access to catalogue items.

- In **_Administration_** > **_Catalogue items_** locate the required item and select its **_Edit_** button
- Click into the required (editable) field and edit as necessary
- Click **_Save_** when done.

<br>

#### 6.3 Disable or Archive a Catalogue Item

To disable or archive a catalogue item, refer to [1.3 Disable or Archive an Item](#13-disable-or-archive-an-item).

<br>

Once the catalogue item has been created, contact LDaCA staff to finalise the resource entitlement processes for your data.
