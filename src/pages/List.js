export default function List(){
    return `
    <h4><p>The purpose of this page is to allow a user to input prescription medication data without putting in personal information that would violate HIPAA or other acts that protect Privately Identifiable Information.</p></h4>
        <fieldset><form method="POST">
        <label for="type">Prescription Form</label>
        <select id = "typeList">
            <option value = "tablet">Tablet</option>
            <option value = "capsule">Capsule</option>
            <option value = "suppository">Suppository</option>
            <option value = "topical">Topical</option>
            <option value = "nasal">Nasal Spray</option>
            <option value = "injection">Injection</option>
            <option value = "throat lozenge">Throat Lozenge</option>
            <option value = "transdermal">Transdermal</option>
            <option value = "liquid">Liquid</option></select>
        <br>
        <label for="Prescription Name">Prescription Name</label>
        <input type="text" id="name" placeholder="Please Enter Your Prescription's Name" maxlength="50" required>
        <br>
        <label for="date">Prescription Date</label>
        <input type="date" name="date" id="date" placeholder="Please Enter The Date the Prescription Was Prescribed">
        <br>
        <label for="type">Dosage Amount</label>
        <input type="number" min=0 name="dosage" id="dosage" placeholder="Please Enter Prescription dosage">
        <br>
        <label for="type">Quantity</label>
        <input type="number" min=0 name="quantity" id="quantity" placeholder="Please Enter Prescription Quantity">
        <br>
        <br>
        <input type="submit" value="Submit">
        <input type="reset" value="Clear">
        </fieldset></form>
`;
}