<template>
    <nav-bar></nav-bar>
    <v-container class="px-15 mt-15">
        
        <v-form ref="form">
          <v-container>
            <!-- Page 1: Students personal info -->
            <v-row justify="center" v-if="page === 1">
              <v-col cols="12">
                <v-card class="text-justify pa-5">
                    <h1 class="text-h5 font-weight-bold text-primary mb-1">Welcome to Registration for Placement !</h1>
                    <h1 class="text-h5 font-weight-bold text-primary mb-1">BE-2025 Placement Drive Students Data</h1>
                    <v-divider></v-divider>
                    <br>
                    <h1 class="text-h6 font-weight-bold text-primary mb-1">BE Placement Drive - Notice</h1>
                    <p class="custom_colors text-h7">Registration to the Placements Drive for batch 2025 is started.</p>
                    <p class="custom_colors text-h7">This form will be open till <strong>5th July EOD</strong>.</p>
                    <h1 class="text-h6 font-weight-bold text-primary mb-1">If you want to participate in placement drive then Fill this Form</h1>
                    <h1 class="text-h6 font-weight-bold text-primary mb-1">Make sure you fill in all the details correctly </h1>
                    <h4 class="text-h7 font-weight-bold text-primary mb-1">(Give this as your at most priority) </h4>
                </v-card>
              </v-col>
  
              <v-col cols="12">
                <v-card class="text-justify pa-5">
                    <h4 class="text-h7 font-weight-bold text-primary">Enter the name as per government ID </h4>
                    <v-text-field v-model="formData.FullName" class="custom_textfield" placeholder="Enter your full name" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">Enter the Primary Email ID</h4>
                    <p class="custom_colors text-h7">The one which you will use for all the communication. Make sure you keep this constant throughout placements.</p>
                    <v-text-field v-model="formData.PrimaryMail" class="custom_textfield" placeholder="Enter your Primary Email ID" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">Enter the Alternate Email ID</h4>
                    <p class="custom_colors text-h7">Note: This Mail Id should be different from your primary Mail Id.</p>
                    <v-text-field v-model="formData.AlternateMail" class="custom_textfield" placeholder="Enter your Alternate Email ID" variant="underlined" color="primary"></v-text-field>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-card class="text-justify pa-5">
                    <h4 class="text-h7 font-weight-bold text-primary">Enter mobile number</h4>
                    <v-text-field v-model="formData.MobileNumber" class="custom_textfield" type="number" placeholder="Enter your mobile number" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">Enter alternate mobile number</h4>
                    <p class="custom_colors text-h7">Should be of parents or of friends and can be used to contact in case of emergency.</p>
                    <v-text-field v-model="formData.AlternateNumber" type="number" class="custom_textfield" placeholder="Enter alternate mobile number" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">Enter Date of Birth</h4>
                    <p class="custom_colors text-h7">Note: Should be in form DD/MM/YYYY.</p>
                    <v-text-field v-model="formData.DOB" class="custom_textfield" placeholder="DD / MM/ YYYY" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">Gender</h4>
                    <v-radio-group v-model="formData.Gender">
                        <v-radio label="Male" class="custom_colors text-h7" value="male"></v-radio>
                        <v-radio label="Female" class="custom_colors text-h7" value="female"></v-radio>
                        <v-radio label="Other" class="custom_colors text-h7" value="other"></v-radio></v-radio-group>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-card class="text-justify pa-5">
                    <h4 class="text-h7 font-weight-bold text-primary">Current Address</h4>
                    <p class="custom_colors text-h7">Address from where you were pursuing your engineering. Hostel, Flat, etc. For pune localites the current and permanent addresses are same! Enter complete address with PIN CODE, not just area.</p>
                    <v-text-field v-model="formData.CurrentAddress" class="custom_textfield" placeholder="Enter here" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">City of  Permanent Residence</h4>
                    <v-text-field v-model="formData.City" class="custom_textfield" placeholder="Enter city" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">State of  Permanent Residence</h4>
                    <v-text-field v-model="formData.State" class="custom_textfield" placeholder="Enter state" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">Enter  Permanent Address</h4>
                    <p class="custom_colors text-h7">Note: Enter complete address with PIN CODE, not just area.</p>
                    <v-text-field v-model="formData.PermenantAddress" class="custom_textfield" placeholder="Enter here" variant="underlined" color="primary"></v-text-field>
                </v-card>
              </v-col>              
            </v-row>
  
            <!-- Page 2: Contact Details -->
            <v-row  justify="center" v-if="page === 2">
                <v-col cols="12">
                <v-card class="text-justify pa-5">
                    <h4 class="text-h7 font-weight-bold text-primary">Branch</h4>
                    <v-radio-group v-model="formData.Branch">
                        <v-radio label="Computer Engineering" class="custom_colors text-h7" value="Computer"></v-radio>
                        <v-radio label="Information Technology" class="custom_colors text-h7" value="IT"></v-radio>
                        <v-radio label="E & TC" class="custom_colors text-h7" value="ENTC"></v-radio></v-radio-group>
                    <h4 class="text-h7 font-weight-bold text-primary">BE Division</h4>
                    <v-text-field v-model="formData.Division" class="custom_textfield" placeholder="ex: BE-4" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">BE Roll Number</h4>
                    <v-text-field v-model="formData.RollNo" type="number" class="custom_textfield" placeholder="ex: 41432" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">University PRN *</h4>
                    <p class="custom_colors text-h7">E.g. 71913123X. This is most important field as your data is linked to this field so fill it correctly.</p>
                    <v-text-field v-model="formData.UniversityPRN" class="custom_textfield" placeholder="Enter here" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary"> PICT Registration ID *</h4>
                    <p class="custom_colors text-h7">This is most important field as your data is linked to this field so fill it correctly. Do not give space after entering the Registration ID.</p>
                    <v-text-field v-model="formData.RegistrationID" class="custom_textfield" placeholder="E.g. I2K19122868" variant="underlined" color="primary"></v-text-field>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-card class="text-justify pa-5">
                    <h4 class="text-h7 font-weight-bold text-primary">10th class percentage</h4>
                    <v-text-field v-model="formData.TenthMarks" type="number" class="custom_textfield" placeholder="ex- 91.01" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">Board of education</h4>
                    <v-radio-group v-model="formData.TenthBoard">
                        <v-radio label="SSC" class="custom_colors text-h7" value="SSC"></v-radio>
                        <v-radio label="CBSE" class="custom_colors text-h7" value="CBSE"></v-radio>
                        <v-radio label="ICSE" class="custom_colors text-h7" value="ICSE"></v-radio></v-radio-group>                   
                    <h4 class="text-h7 font-weight-bold text-primary">Year of passing 10 th</h4>
                    <v-text-field v-model="formData.YearPassingTenth" class="custom_textfield" placeholder="ex: 2019" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">Education Gap after 10th </h4>
                    <p class="custom_colors text-h7">Enter no. of years of gap after 12th and before intermediate (12th and/or diploma). For no gap, enter 0</p>
                    <v-text-field v-model="formData.EducationGap" type="number" class="custom_textfield" placeholder="Enter here" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary"> Reason of Gap</h4>
                    <p class="custom_colors text-h7">Put NA (without quotes) if you don't have a gap</p>
                    <v-text-field v-model="formData.ReasonOfGap" class="custom_textfield" placeholder="Enter here" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">Have you appeared 12th or Diploma ?</h4>
                    <v-radio-group v-model="formData.Choice">
                        <v-radio label="12th" class="custom_colors text-h7" value="12th"></v-radio>
                        <v-radio label="Diploma" class="custom_colors text-h7" value="diploma"></v-radio></v-radio-group>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-card class="text-justify pa-5">
                    <h4 class="text-h7 font-weight-bold text-primary">12th class percentage</h4>
                    <v-text-field v-model="formData.TwelfthMarks" class="custom_textfield" placeholder="ex- 80.01" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">Board of education of 12th</h4>
                    <v-radio-group v-model="formData.TwelfthBoard">
                        <v-radio label="SSC" class="custom_colors text-h7" value="SSC"></v-radio>
                        <v-radio label="CBSE" class="custom_colors text-h7" value="CBSE"></v-radio>
                        <v-radio label="ICSE" class="custom_colors text-h7" value="ICSE"></v-radio></v-radio-group>                   
                    <h4 class="text-h7 font-weight-bold text-primary">Year of passing 12 th</h4>
                    <v-text-field v-model="formData.YearPassingTwelfth" type="number" class="custom_textfield" placeholder="ex: 2019" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">Education Gap after 12th </h4>
                    <p class="custom_colors text-h7">Enter no. of years of gap after 12th and before intermediate (12th and/or diploma). For no gap, enter 0</p>
                    <v-text-field v-model="formData.EducationGap12" type="number" class="custom_textfield" placeholder="Enter here" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary"> Reason of Gap</h4>
                    <p class="custom_colors text-h7">Put NA (without quotes) if you don't have a gap</p>
                    <v-text-field v-model="formData.ReasonOfGap12" class="custom_textfield" placeholder="Enter here" variant="underlined" color="primary"></v-text-field>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-card class="text-justify pa-5">
                    <h4 class="text-h7 font-weight-bold text-primary">Diploma percentage</h4>
                    <v-text-field v-model="formData.DiplomaMarks" type="number" class="custom_textfield" placeholder="ex- 80.01" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">University of Diploma</h4>
                    <v-text-field v-model="formData.DiplomaUniversity" class="custom_textfield" placeholder="ex: GPP" variant="underlined" color="primary"></v-text-field>                 
                    <h4 class="text-h7 font-weight-bold text-primary">Year of passing Diploma</h4>
                    <v-text-field v-model="formData.YearPassingDiploma" type="number" class="custom_textfield" placeholder="ex: 2019" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">Education Gap after Diploma </h4>
                    <p class="custom_colors text-h7">Enter no. of years of gap after 12th and before intermediate (12th and/or diploma). For no gap, enter 0</p>
                    <v-text-field v-model="formData.EducationGapDiploma" type="number" class="custom_textfield" placeholder="Enter here" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary"> Reason of Gap</h4>
                    <p class="custom_colors text-h7">Put NA (without quotes) if you don't have a gap</p>
                    <v-text-field v-model="formData.ReasonOfGapDiploma" class="custom_textfield" placeholder="Enter here" variant="underlined" color="primary"></v-text-field>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-card class="text-justify pa-5">
                    <h4 class="text-h7 font-weight-bold text-primary">MH-CET Percentile *</h4>
                    <p class="custom_colors text-h7">(Correct upto 2 decimal points Ex: 96.69). Put -1 (minus 1) if you haven't given MH-CET. Do NOT put % sign</p>
                    <v-text-field v-model="formData.CET" type="number" class="custom_textfield" placeholder="enter here" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">JEE Mains Percentile  *</h4>
                    <p class="custom_colors text-h7">(Correct upto 2 decimal points Ex: 96.69). Put -1 (minus 1) if you haven't given JEE. Do NOT put % sign</p>
                    <v-text-field v-model="formData.JEE" type="number" class="custom_textfield" placeholder="enter here" variant="underlined" color="primary"></v-text-field>                 
                </v-card>
              </v-col>
  
              
            </v-row>
  
            <!-- Page 3: Academic Details -->
            <v-row justify="center" v-if="page === 3">
                <v-col cols="12">
                <v-card class="text-justify pa-5">
                    <h1 class="text-h5 font-weight-bold text-primary mb-1">Engineering Details</h1>
                    <v-divider></v-divider>
                    <br>
                    <h4 class="text-h7 font-weight-bold text-primary mb-1">Year of strating college </h4>
                    <p class="custom_colors text-h7">It is also mentioned on your College ID Card.</p>
                    <v-text-field v-model="formData.Year" type="number" class="custom_textfield" placeholder="ex: 2022" variant="underlined" color="primary"></v-text-field>   
                </v-card>
              </v-col>
  
              <v-col cols="12">
                <v-card class="text-justify pa-5">
                    <h4 class="text-h7 font-weight-bold text-primary mb-1">NOTE: How to calculate score of individual semester.</h4>
                    <p class="custom_colors text-h7">Odd semester result <strong>(Semester 1, Semester 3, Semester 5) is the one you received on that specific semester mark-sheet. Even </strong>semester result is <strong>NOT</strong> the one you received on university mark-sheet, How to calculate the same is given below :-
If you have NO backlog then <strong>(Semester 2, Semester 4) Result = [addition of all the credit points on that semester]/22</strong>.
If you have NO backlog then <strong>(Semester 6) Result = [addition of all the credit points on that semester]/21</strong>. For e.g. If addition of the credit points of your even semester (Semester 2, Semester 4) are 212, then the sgpa is 212/22= 9.63</p>
                    
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-card class="text-justify pa-5">
                    <h4 class="text-h7 font-weight-bold text-primary">If you HAVE ACTIVE backlog in any semester, enter 0 for that semester</h4>
                    <h4 class="text-h7 font-weight-bold text-primary">FE 1st sem SGPA *</h4>
                    <p class="custom_colors text-h7">Diploma people put -1 (minus 1)</p>
                    <v-text-field v-model="formData.FE1" type="number" class="custom_textfield" placeholder="enter here" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">FE 2nd sem SGPA *</h4>
                    <p class="custom_colors text-h7">Diploma people put -1 (minus 1)</p>
                    <v-text-field v-model="formData.FE2" type="number" class="custom_textfield" placeholder="enter here" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">SE 1st sem SGPA *</h4>
                    <v-text-field v-model="formData.SE1" type="number" class="custom_textfield" placeholder="enter here" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">SE 2nd sem SGPA *</h4>
                    <v-text-field v-model="formData.SE2" type="number" class="custom_textfield" placeholder="enter here" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">TE 1st sem SGPA *</h4>
                    <v-text-field v-model="formData.TE1" type="number" class="custom_textfield" placeholder="enter here" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">TE 2nd sem SGPA *</h4>
                    <v-text-field v-model="formData.TE2" type="number" class="custom_textfield" placeholder="enter here" variant="underlined" color="primary"></v-text-field>
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-card class="text-justify pa-5">
                    <h4 class="text-h7 font-weight-bold text-primary">Total active backlogs *</h4>
                    <p class="custom_colors text-h7">If you have no active backlog, enter 0. If you get a Backlog in previous semester or in current semester and you have not cleared it till now then it will be considered as Active Backlog.</p>
                    <v-text-field v-model="formData.ActiveBacklog" type="number" class="custom_textfield" placeholder="enter here" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">In which SEM you have Active Backlog</h4>
                    <v-checkbox-group v-model="formData.semesters" column>
      <v-checkbox class="custom_colors text-h7 mt-1" label="FE Sem 1" value="FE Sem 1"></v-checkbox>
      <v-checkbox class="custom_colors text-h7 mt-1" label="FE Sem 2" value="FE Sem 2"></v-checkbox>
      <v-checkbox class="custom_colors text-h7" label="SE Sem 1" value="SE Sem 1"></v-checkbox>
      <v-checkbox class="custom_colors text-h7" label="SE Sem 2" value="SE Sem 2"></v-checkbox>
      <v-checkbox class="custom_colors text-h7" label="TE Sem 1" value="TE Sem 1"></v-checkbox>
      <v-checkbox class="custom_colors text-h7" label="TE Sem 2" value="TE Sem 2"></v-checkbox>
      <v-checkbox class="custom_colors text-h7" label="None" value="None"></v-checkbox>
    </v-checkbox-group>
                    <h4 class="text-h7 font-weight-bold text-primary">Total passive backlogs *</h4>
                    <p class="custom_colors text-h7">If you have no passive backlogs, enter 0. If you get a Backlog in previous semester and you have cleared it then it will be considered as Passive Backlog.</p>
                    <v-text-field v-model="formData.PassiveBacklog" type="number" class="custom_textfield" placeholder="enter here" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary">Are you YD (Year Down)? *</h4>
                    <v-text-field v-model="formData.YD" class="custom_textfield" placeholder="YES/NO" variant="underlined" color="primary"></v-text-field>
                </v-card>
            </v-col>

            <v-col cols="12">
                <v-card class="text-justify pa-5">
                    <h4 class="text-h7 font-weight-bold text-primary mb-1">Aadhar Number * </h4>
                    <p class="custom_colors text-h7">Do NOT put spaces and dashes</p>
                    <v-text-field v-model="formData.AdharNumber" type="number" class="custom_textfield" placeholder="enter here" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary mb-1">PAN Number * </h4>
                    <p class="custom_colors text-h7">If you don't have PAN Card, put NA (without quotes) and apply for PAN ASAP. If you applied and in process then also put NA (without quotes)</p>
                    <v-text-field v-model="formData.PanNumber" class="custom_textfield" placeholder="enter here" variant="underlined" color="primary"></v-text-field>
                    <h4 class="text-h7 font-weight-bold text-primary mb-1">Passport Number * </h4>
                    <p class="custom_colors text-h7">If you don't have Passport Card, put NA (without quotes) and apply for PAN ASAP. If you applied and in process then also put NA (without quotes)</p>
                    <v-text-field v-model="formData.PassportNumber" class="custom_textfield" placeholder="enter here" variant="underlined" color="primary"></v-text-field>   
                    <h4 class="text-h7 font-weight-bold text-primary mb-1">Citizenship * </h4>
                    <p class="custom_colors text-h7">Ex- Indian</p>
                    <v-text-field v-model="formData.citizen" class="custom_textfield" placeholder="enter here" variant="underlined" color="primary"></v-text-field>
                </v-card>
              </v-col>

            </v-row>
  
            <!-- Page 4: Additional Details -->
            <v-row justify="center" v-if="page === 4">
              <v-col cols="12">
                <v-card class="text-justify pa-5">
                    <h1 class="text-h5 font-weight-bold text-primary mb-1">Upload PDF of Documents *</h1>
                    <v-divider></v-divider>
                    <br>
                    <h4 class="text-h7 font-weight-bold text-primary mb-1">Naming of file should be PICT-Registration-No_FirstNameLastName_Documents.pdf<br>eg: E2K19122868_ShubhJain_Documents.pdf </h4>
                    <p class="custom_colors text-h7">Please ensure that your document is submitted in the same order. Each document should be self attested with Full Name and Signature on individual document. Make a single PDF.</p>
                    <br>
                    <p class="custom_colors text-h7">1. 12th Grade Marksheet (Self Attested)<br>
                        2. 12th Grade / Diploma Marksheet(Self Attested)<br>
                        3. FE Sem 1 Original Marksheet (Self Attested)<br>
                        4. FE Sem 2 Original Marksheet (Self Attested)<br>
                        5. Attach Calculation of SGPA for FE SEM 2<br>
                        6. SE Sem 1 Original Marksheet  (Self Attested)<br>
                        7. SE Sem 2 Original Marksheet  (Self Attested)<br>
                        8. Attach Calculation of SGPA for SE SEM 2<br>
                        9. TE Sem 1 Original Marksheet  (Self Attested)<br>
                        12. TE Sem 2 Online Marksheet (Self Attested)<br>
                        11. Attach Calculation of SGPA for TE SEM 2<br>
                        12. College ID (both sides)  (Self Attested)<br>
                        13. Aadhar Card (both sides)  (Self Attested)<br>
                        14. PAN Card (both sides) (Self Attested)<br>
                        15. Passport (both sides)  (Self Attested)<br>
                        16. AMCAT Test Payment Receipt (Self Attested)</p>
                        <v-file-input
                label="Upload here"
                variant="underlined"
                color="primary"
                style="color: rgba(8, 30, 127)"
                v-model="formData.Documents"
              ></v-file-input>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-card class="text-justify pa-5">
                    <h1 class="text-h5 font-weight-bold text-primary mb-1">Upload PDF of AMCAT Test Result</h1>
                    <p class="custom_colors text-h7">Naming of file should be PICT-Registration-No_FirstNameLastName_ AMCAT_Result.pdf e<br>g: E2K19122868_ShubhJain_AMCAT_Result.pdf</p>
                    <p class="custom_colors text-h7"><strong>Self attest with Full Name and Signature <br>Upload whole PDF</strong></p>
                    <v-file-input
                label="Upload here"
                variant="underlined"
                color="primary"
                style="color: rgba(8, 30, 127)"
                v-model="formData.AmcatResult"
              ></v-file-input>
                </v-card>
              </v-col>

              <v-col cols="12">
                <v-card class="text-justify pa-5">
                    <h1 class="text-h5 font-weight-bold text-primary mb-1">Upload PDF of BE Fee Receipt</h1>
                    <p class="custom_colors text-h7">Naming of file should be PICT-Registration-No_FirstNameLastName_BE_Fee_Receipt.pdf</p>
                    <p class="custom_colors text-h7"><strong>Self attest with Full Name and Signature<br>eg: E2K19122868_ShubhJain_BE_Fee_Receipt.pdf</strong></p>
                    <v-file-input
                label="Upload here"
                variant="underlined"
                color="primary"
                style="color: rgba(8, 30, 127)"
                v-model="formData.BeReceipt"
              ></v-file-input>
                </v-card>
              </v-col>

              <v-col cols="12" class="text-center">
              <v-btn class="mt-4 bg-primary" size="large" @click="submitForm">Submit</v-btn>
            </v-col>

            <v-col cols="12">
                <v-card class="text-justify pa-4 bg-primary">
                    <h1 class="text-h6 font-weight-bold mb-1" style="color:#fff; text-align:center;">All the best for your placement season!</h1>
                </v-card>
              </v-col>
   
            </v-row>
          </v-container>
        </v-form>
  
        
        <v-pagination class="text-primary" v-model="page" :length="4" rounded="circle"></v-pagination>
  
        
        <v-row class="mt-4 justify-center">
  <v-col cols="auto">
    <v-btn class="bg-primary" size="large" @click="prevPage" :disabled="page === 1">Previous</v-btn>
  </v-col>
  
  <v-col cols="auto">
    <v-btn class="bg-primary" size="large" color="primary" @click="nextPage" :disabled="page === 4">Next</v-btn>
  </v-col>
</v-row>

     
    </v-container>
  </template>
  
  <script>
  import Nav from "@/components/BaseComponents/Nav.vue";
  export default {
    components: {
    "nav-bar": Nav,
  },
    data() {
      return {
        page: 1,
        formData: {
          FullName: '',
          PrimaryMail: '',
          AlternateMail:'',
          MobileNumber:null,
          AlternateNumber:null,
          DOB:'',
          Gender:'',
          CurrentAddress:'',
          City:'',
          State:'',
          PermenantAddress:'',
          Branch:'',
          Division:'',
          RollNo:null,
          UniversityPRN:'',
          RegistrationID:'',
          TenthMarks:null,
          TenthBoard:'',
          YearPassingTenth:null,
          EducationGap:null,
          ReasonOfGap:'',
          Choice:'',
          TwelfthMarks:null,
          TwelfthBoard:'',
          YearPassingTwelfth:null,
          EducationGap12:null,
          ReasonOfGap12:'',
          DiplomaMarks:null,
          DiplomaUniversity:'',
          YearPassingDiploma:null,
          EducationGapDiploma:null,
          ReasonOfGapDiploma:'',
          CET:null,
          JEE:null,
          Year:null,
          FE1:null,
          FE2:null,
          SE1:null,
          SE2:null,
          TE1:null,
          TE2:null,
          ActiveBacklog:null,
          semesters:'',
          PassiveBacklog:null,
          YD:'',
          AdharNumber:null,
          PanNumber:'',
          PassportNumber:'',
          citizen:'',
          Documents:null,
          AmcatResult:null,
          BeReceipt:null,
        },
      };
    },
    methods: {
      nextPage() {
        if (this.page < 4) this.page++;
      },
      prevPage() {
        if (this.page > 1) this.page--;
      },
      submitForm() {
        alert("Form Submitted Successfully!");
        console.log(this.formData);
      },
    },
  };
  </script>
  <style scoped>
  .custom_colors{
    color: rgba(8, 30, 127, 0.6);
  }
 .custom_textfield{
    color:rgba(8, 30, 127)
 }
  </style>

  