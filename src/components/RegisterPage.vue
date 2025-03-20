/* eslint-disable */
<template>
  <nav-bar></nav-bar>
  <v-container class="px-15 mt-15">
    <h1 class="text-h5 font-weight-bold text-primary mb-5 mt-3">
      Get Details Through ERP
    </h1>
    <p class="text-justify text-h6" style="color: rgba(8, 30, 127, 0.6)">
      This is the registration form to register for placement drive. Fill in your Registration Number and ERP password
      to get details for registering.
    </p>
    <v-form ref="form" @submit.prevent="getdetails">
      <v-row class="mt-4">
        <v-col cols="5">
          <v-text-field v-model="erp_reg" class="text-primary" color="primary" append-inner-icon="mdi-magnify"
            label="Enter by Registration Number" variant="outlined" dense clearable></v-text-field>
        </v-col>
        <v-col cols="4">
          <v-text-field v-model="erp_password" label="Password" :type="show1 ? 'text' : 'password'"
            placeholder="Enter your password" :append-inner-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'" variant="outlined"
            color="primary" style="color: rgba(8, 30, 127)" @click:append-inner="show1 = !show1"></v-text-field>
        </v-col>
        <v-col cols="3">
          <v-btn class="bg-primary" size="x-large" type="submit" block :loading="loader">
            Get Details
          </v-btn>
        </v-col>
      </v-row>
    </v-form>
    <div v-if="showform">
      <v-form ref="form" @submit.prevent="submitForm">
        <!-- Page 1: Student's Personal Info -->
        <v-row justify="center" v-if="page === 1">
          <v-col cols="12">
            <v-card class="text-justify pa-5">
              <h1 class="text-h5 font-weight-bold text-primary mb-1">
                Welcome to Registration for Placement !
              </h1>
              <h1 class="text-h5 font-weight-bold text-primary mb-1">
                BE-2026 Placement Drive Students Data
              </h1>
              <v-divider></v-divider>
              <br />
              <h1 class="text-h6 font-weight-bold text-primary mb-1">
                BE Placement Drive - Notice
              </h1>
              <p class="custom_colors text-h7">
                Registration to the Placements Drive for batch 2026 is started.
              </p>
              <h1 class="text-h6 font-weight-bold text-primary mb-1">
                If you want to participate in placement drive then fill this
                form
              </h1>
              <h1 class="text-h6 font-weight-bold text-primary mb-1">
                Make sure you fill in all the details correctly
              </h1>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card class="text-justify pa-5">
              <h4 class="text-h7 font-weight-bold text-primary">
                Enter the name as per government ID
              </h4>
              <v-text-field v-model="formData.full_name" class="custom_textfield" placeholder="Enter your full name"
                variant="underlined" color="primary" :rules="[(v) => (v && v.trim() !== '') || 'Name is required']"
                required :readonly="isreadonly"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                Enter the Primary Email ID
              </h4>
              <p class="custom_colors text-h7">
                The one which you will use for all communication. Keep it
                constant throughout placements.
              </p>
              <v-text-field v-model="formData.primary_email" class="custom_textfield"
                placeholder="Enter your Primary Email ID" variant="underlined" color="primary" :rules="[
                  (v) => (v && v.trim() !== '') || 'Email is required',
                  (v) =>
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      v
                    ) || 'Enter a valid email',
                ]" required></v-text-field>

              <h4 class="text-h7 font-weight-bold text-primary">
                Enter the Alternate Email ID
              </h4>
              <p class="custom_colors text-h7">
                Note: This Mail ID should be different from your primary Mail
                ID.
              </p>
              <v-text-field v-model="formData.alternate_email" class="custom_textfield"
                placeholder="Enter your Alternate Email ID" variant="underlined" color="primary" :rules="[
                  (v) => !!v || 'Alternate email is required',
                  (v) =>
                    /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
                      v
                    ) || 'Enter a valid email',
                  (v) =>
                    v !== formData.primary_email ||
                    'Alternate email must be different from Primary email',
                ]" required></v-text-field>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card class="text-justify pa-5">
              <h4 class="text-h7 font-weight-bold text-primary">
                Enter mobile number
              </h4>
              <v-text-field v-model="formData.primary_mobile_number" class="custom_textfield" type="number"
                placeholder="Enter your mobile number" variant="underlined" color="primary" :rules="[
                  (v) => !!v || 'Mobile number is required',
                  (v) =>
                    /^\d{10}$/.test(v) ||
                    'Enter a valid 10-digit mobile number',
                ]" required></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                Enter alternate mobile number
              </h4>
              <p class="custom_colors text-h7">
                Should be of parents or of friends and can be used to contact in
                case of emergency.
              </p>
              <v-text-field v-model="formData.alternate_mobile_number" type="number" class="custom_textfield"
                placeholder="Enter alternate mobile number" variant="underlined" color="primary" :rules="[
                  (v) => !!v || 'Alternate Mobile number is required',
                  (v) =>
                    /^\d{10}$/.test(v) ||
                    'Enter a valid 10-digit mobile number',
                ]" required></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                Enter Date of Birth
              </h4>
              <p class="custom_colors text-h7">
                Note: Should be in form DD/MM/YYYY.
              </p>
              <v-text-field v-model="formData.date_of_birth" class="custom_textfield" placeholder="DD / MM/ YYYY"
                variant="underlined" color="primary" type="date" :rules="[(v) => !!v || 'Date of Birth is required']"
                required :readonly="isreadonly"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">Gender</h4>
              <v-radio-group v-model="formData.gender" :readonly="isreadonly" :rules="[(v) => !!v || 'Gender is required']" required>
                <v-radio label="Male" class="custom_colors text-h7" value="Male"></v-radio>
                <v-radio label="Female" class="custom_colors text-h7" value="Female"></v-radio>
                <v-radio label="Other" class="custom_colors text-h7" value="Other"></v-radio></v-radio-group>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card class="text-justify pa-5">
              <h4 class="text-h7 font-weight-bold text-primary">
                Current Address
              </h4>
              <p class="custom_colors text-h7">
                Address from where you were pursuing your engineering. Hostel,
                Flat, etc. For pune localites the current and permanent
                addresses are same! Enter complete address with PIN CODE, not
                just area.
              </p>
              <v-text-field v-model="formData.current_address" class="custom_textfield" placeholder="Enter here"
                variant="underlined" color="primary" :rules="[(v) => !!v || 'Current Address is required']"
                required></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                City of Permanent Residence
              </h4>
              <v-text-field v-model="formData.city" class="custom_textfield" placeholder="Enter city"
                variant="underlined" color="primary" :rules="[(v) => !!v || 'City is required']"
                required :readonly="isreadonly"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                State of Permanent Residence
              </h4>
              <v-text-field v-model="formData.state" class="custom_textfield" placeholder="Enter state"
                variant="underlined" color="primary" :rules="[(v) => !!v || 'State is required']"
                required :readonly="isreadonly"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                Enter Permanent Address
              </h4>
              <p class="custom_colors text-h7">
                Note: Enter complete address with PIN CODE, not just area.
              </p>
              <v-text-field v-model="formData.permanent_address" class="custom_textfield" placeholder="Enter here"
                variant="underlined" color="primary" :rules="[(v) => !!v || 'Permanent Address is required']"
                required :readonly="isreadonly"></v-text-field>
            </v-card>
          </v-col>
        </v-row>
        <!-- Page 2: Contact Details -->
        <v-row justify="center" v-if="page === 2">
          <v-col cols="12">
            <v-card class="text-justify pa-5">
              <h4 class="text-h7 font-weight-bold text-primary">Branch</h4>
              <v-radio-group v-model="formData.branch" :readonly="isreadonly" :rules="[(v) => !!v || 'Branch is required']">
                <v-radio label="Computer Engineering" class="custom_colors text-h7" value="CE"></v-radio>
                <v-radio label="Information Technology" class="custom_colors text-h7" value="IT"></v-radio>
                <v-radio label="E & TC" class="custom_colors text-h7" value="ENTC"></v-radio></v-radio-group>
              <h4 class="text-h7 font-weight-bold text-primary">BE Division</h4>
              <v-text-field v-model="formData.division" class="custom_textfield" placeholder="ex: BE-4"
                variant="underlined" color="primary" :rules="[(v) => !!v || 'Division is required']"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                BE Roll Number
              </h4>
              <v-text-field v-model="formData.roll_number" type="number" class="custom_textfield"
                placeholder="ex: 41432" variant="underlined" color="primary"
                :rules="[(v) => !!v || 'Roll Number is required']"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                University PRN *
              </h4>
              <p class="custom_colors text-h7">
                E.g. 71913123X. This is most important field as your data is
                linked to this field so fill it correctly.
              </p>
              <v-text-field v-model="formData.university_prn" class="custom_textfield" placeholder="Enter here"
                variant="underlined" color="primary" :rules="[
                  (v) => !!v || 'PRN is required',
                  (v) =>
                    /^[A-Z0-9]{9}$/.test(v) ||
                    'PRN must be exactly 9 characters',
                ]" @input="
                  formData.university_prn =
                  formData.university_prn.toUpperCase()
                  " :readonly="isreadonly"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                College Registration ID *
              </h4>
              <p class="custom_colors text-h7">
                This is most important field as your data is linked to this
                field so fill it correctly. Do not give space after entering the
                Registration ID.
              </p>
              <v-text-field v-model="formData.pict_registration_id" class="custom_textfield"
                placeholder="E.g. I2K19122868" variant="underlined" color="primary"
                :rules="[(v) => !!v || 'This is required field']" @input="
                  formData.pict_registration_id =
                  formData.pict_registration_id.toUpperCase()
                  " :readonly="isreadonly"></v-text-field>
            </v-card>
          </v-col>
          <v-col cols="12">
            <v-card class="text-justify pa-5">
              <h4 class="text-h7 font-weight-bold text-primary">
                10th class percentage
              </h4>
              <v-text-field v-model="formData.percentage_10th" type="number" class="custom_textfield"
                placeholder="ex- 91.01" variant="underlined" color="primary"
                :rules="[(v) => !!v || 'This is required field']" :readonly="isreadonly"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                Board of education
              </h4>
              <v-radio-group v-model="formData.board_10th" :readonly="isreadonly" :rules="[(v) => !!v || 'This is required field']">
                <v-radio label="SSC" class="custom_colors text-h7" value="SSC"></v-radio>
                <v-radio label="CBSE" class="custom_colors text-h7" value="CBSE"></v-radio>
                <v-radio label="ICSE" class="custom_colors text-h7" value="ICSE"></v-radio>
                <v-radio label="Other" class="custom_colors text-h7" value="Other"></v-radio>
              </v-radio-group>
              <h4 class="text-h7 font-weight-bold text-primary">
                Year of passing 10 th
              </h4>
              <v-text-field v-model="formData.passing_year_10th" class="custom_textfield" placeholder="ex: 2019"
                variant="underlined" color="primary" :rules="[(v) => !!v || 'This is required field']" :readonly="isreadonly"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                Education Gap after 10th
              </h4>
              <p class="custom_colors text-h7">
                Enter no. of years of gap after 10th and before intermediate
                (12th and/or diploma). For no gap, enter 0
              </p>
              <v-text-field v-model="formData.no_of_gap_years_after_10th" type="number" class="custom_textfield"
                placeholder="Enter here" variant="underlined" color="primary"
                :rules="[(v) => !!v || 'This is required field']" :readonly="isreadonly"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                Reason of Gap
              </h4>
              <p class="custom_colors text-h7">
                Put N/A (without quotes) if you don't have a gap
              </p>
              <v-text-field v-model="formData.reason_of_gap_after_10th" class="custom_textfield"
                placeholder="Enter here" variant="underlined" color="primary"
                :rules="[(v) => !!v || 'This is required field']" :readonly="isreadonly"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                Have you appeared 12th or Diploma ?
              </h4>
              <v-radio-group v-model="formData.after_10th_appeared_for"
                :rules="[(v) => !!v || 'This is required field']" :readonly="isreadonly">
                <v-radio label="12th" class="custom_colors text-h7" value="12th"></v-radio>
                <v-radio label="Diploma" class="custom_colors text-h7" value="Diploma"></v-radio></v-radio-group>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card class="text-justify pa-5">
              <h4 class="text-h7 font-weight-bold text-primary">
                12th class percentage
              </h4>
              <p class="custom_colors text-h7">Diploma students enter -1 here.</p>
              <v-text-field v-model="formData.percentage_12th" class="custom_textfield" placeholder="ex- 80.01"
                variant="underlined" color="primary" :readonly="isreadonly"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                Board of education of 12th
              </h4>
              <p class="custom_colors text-h7">
                Diploma students select None here.
              </p>
              <v-radio-group v-model="formData.board_12th" :readonly="isreadonly">
                <v-radio label="HSC" class="custom_colors text-h7" value="SSC"></v-radio>
                <v-radio label="CBSE" class="custom_colors text-h7" value="CBSE"></v-radio>
                <v-radio label="Other" class="custom_colors text-h7" value="Other"></v-radio>
                <v-radio label="None" class="custom_colors text-h7" value="None"></v-radio></v-radio-group>
              <h4 class="text-h7 font-weight-bold text-primary">
                Year of passing 12 th
              </h4>
              <p class="custom_colors text-h7">
                Diploma students enter -1 here.
              </p>
              <v-text-field v-model="formData.passing_year_12th" type="number" class="custom_textfield"
                placeholder="ex: 2019" variant="underlined" color="primary" :readonly="isreadonly"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                Education Gap after 12th
              </h4>
              <p class="custom_colors text-h7">
                Enter no. of years of gap after 12th. For no gap, enter 0
              </p>
              <v-text-field v-model="formData.no_of_gap_years_after_12th" type="number" class="custom_textfield"
                placeholder="Enter here" variant="underlined" color="primary"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary" :readonly="isreadonly">
                Reason of Gap
              </h4>
              <p class="custom_colors text-h7">
                Put N/A (without quotes) if you don't have a gap
              </p>
              <v-text-field v-model="formData.reason_of_gap_after_12th" class="custom_textfield"
                placeholder="Enter here" variant="underlined" color="primary" :readonly="isreadonly"></v-text-field>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card class="text-justify pa-5">
              <h4 class="text-h7 font-weight-bold text-primary">
                Diploma percentage
              </h4>
              <p class="custom_colors text-h7">
                12th students enter -1 here.
              </p>
              <v-text-field v-model="formData.percentage_diploma" type="number" class="custom_textfield"
                placeholder="ex- 80.01" variant="underlined" color="primary"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary" :readonly="isreadonly">
                University of Diploma
              </h4>
              <p class="custom_colors text-h7">
                12th students enter N/A here.
              </p>
              <v-text-field v-model="formData.university_of_diploma" class="custom_textfield" placeholder="ex: GPP"
                variant="underlined" color="primary"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary" :readonly="isreadonly">
                Year of passing Diploma
              </h4>
              <p class="custom_colors text-h7">
                12th students enter -1 here.
              </p>
              <v-text-field v-model="formData.passing_year_diploma" type="number" class="custom_textfield"
                placeholder="ex: 2019" variant="underlined" color="primary"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary" :readonly="isreadonly">
                Education Gap after Diploma
              </h4>
              <p class="custom_colors text-h7">
                Enter no. of years of gap after Diploma. For no gap, enter 0
              </p>
              <v-text-field v-model="formData.no_of_gap_years_after_diploma" type="number" class="custom_textfield"
                placeholder="Enter here" variant="underlined" color="primary"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary" :readonly="isreadonly">
                Reason of Gap
              </h4>
              <p class="custom_colors text-h7">
                Put N/A (without quotes) if you don't have a gap
              </p>
              <v-text-field v-model="formData.reason_of_gap_after_diploma" class="custom_textfield"
                placeholder="Enter here" variant="underlined" color="primary"></v-text-field>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card class="text-justify pa-5">
              <h4 class="text-h7 font-weight-bold text-primary">
                MH-CET Percentile
              </h4>
              <p class="custom_colors text-h7">
                (Correct upto 2 decimal points Ex: 96.69). Put -1 (minus one) if you
                haven't given MH-CET. Do NOT put % sign
              </p>
              <v-text-field v-model="formData.percentile_cet" type="number" class="custom_textfield"
                placeholder="enter here" variant="underlined" color="primary"
                :rules="[(v) => !!v || 'This is required field']" :readonly="isreadonly"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                JEE Mains Percentile
              </h4>
              <p class="custom_colors text-h7">
                (Correct upto 2 decimal points Ex: 96.69). Put -1 (minus one) if you
                haven't given JEE. Do NOT put % sign
              </p>
              <v-text-field v-model="formData.percentile_jee" type="number" class="custom_textfield"
                placeholder="enter here" variant="underlined" color="primary"
                :rules="[(v) => !!v || 'This is required field']" :readonly="isreadonly"></v-text-field>
            </v-card>
          </v-col>
        </v-row>

        <!-- Page 3: Academic Details -->
        <v-row justify="center" v-if="page === 3">
          <v-col cols="12">
            <v-card class="text-justify pa-5">
              <h1 class="text-h5 font-weight-bold text-primary mb-1">
                Engineering Details
              </h1>
              <v-divider></v-divider>
              <br />
              <h4 class="text-h7 font-weight-bold text-primary mb-1">
                Year of starting college
              </h4>
              <p class="custom_colors text-h7">
                It is also mentioned on your College ID Card.
              </p>
              <v-text-field v-model="formData.college_started_year" type="number" class="custom_textfield"
                placeholder="ex: 2022" variant="underlined" color="primary"
                :rules="[(v) => !!v || 'This is required field']" :readonly="isreadonly"></v-text-field>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card class="text-justify pa-5">
              <h4 class="text-h7 font-weight-bold text-primary mb-1">
                NOTE: How to calculate score of individual semester.
              </h4>
              <p class="custom_colors text-h7">
                Odd semester result
                <strong>(Semester 1, Semester 3, Semester 5) is the one you received
                  on that specific semester mark-sheet. Even </strong>semester result is <strong>NOT</strong> the one
                you received on
                university mark-sheet, How to calculate the same is given below
                :- If you have NO backlog then
                <strong>(Semester 2, Semester 4) Result = [addition of all the credit
                  points on that semester]/22</strong>. If you have NO backlog then
                <strong>(Semester 6) Result = [addition of all the credit points on
                  that semester]/21</strong>. For e.g. If addition of the credit points of your even
                semester (Semester 2, Semester 4) are 212, then the sgpa is
                212/22= 9.63
              </p>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card class="text-justify pa-5">
              <h4 class="text-h7 font-weight-bold text-primary">
                If you HAVE ACTIVE backlog in any semester, enter -1 for that
                semester
              </h4>
              <h4 class="text-h7 font-weight-bold text-primary">
                FE 1st sem SGPA *
              </h4>
              <p class="custom_colors text-h7">Diploma people put -1 here.</p>
              <v-text-field v-model="formData.sgpa_fe_sem_1" type="number" class="custom_textfield"
                placeholder="enter here" variant="underlined" color="primary"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                FE 2nd sem SGPA *
              </h4>
              <p class="custom_colors text-h7">Diploma people put -1 here.</p>
              <v-text-field v-model="formData.sgpa_fe_sem_2" type="number" class="custom_textfield"
                placeholder="enter here" variant="underlined" color="primary"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                SE 1st sem SGPA *
              </h4>
              <v-text-field v-model="formData.sgpa_se_sem_1" type="number" class="custom_textfield"
                placeholder="enter here" variant="underlined" color="primary"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                SE 2nd sem SGPA *
              </h4>
              <v-text-field v-model="formData.sgpa_se_sem_2" type="number" class="custom_textfield"
                placeholder="enter here" variant="underlined" color="primary"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                TE 1st sem SGPA *
              </h4>
              <v-text-field v-model="formData.sgpa_te_sem_1" type="number" class="custom_textfield"
                placeholder="enter here" variant="underlined" color="primary"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                TE 2nd sem SGPA *
              </h4>
              <v-text-field v-model="formData.sgpa_te_sem_2" type="number" class="custom_textfield"
                placeholder="enter here" variant="underlined" color="primary"></v-text-field>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card class="text-justify pa-5">
              <h4 class="text-h7 font-weight-bold text-primary">
                Total active backlogs
              </h4>
              <p class="custom_colors text-h7">
                If you have no active backlog, enter 0. If you get a Backlog in
                previous semester or in current semester and you have not
                cleared it till now then it will be considered as Active
                Backlog.
              </p>
              <v-text-field v-model="formData.active_backlogs" type="number" class="custom_textfield"
                placeholder="enter here" variant="underlined" color="primary"
                :rules="[(v) => !!v || 'This is required field']"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                In which SEM you have Active Backlog
              </h4>
              <v-checkbox-group v-model="formData.active_backlog_semesters" column
                :rules="[(v) => !!v || 'This is required field']">
                <v-checkbox class="custom_colors text-h7 mt-1" label="FE Sem 1" value="FE Sem 1"></v-checkbox>
                <v-checkbox class="custom_colors text-h7 mt-n8" label="FE Sem 2" value="FE Sem 2"></v-checkbox>
                <v-checkbox class="custom_colors text-h7 mt-n8" label="SE Sem 1" value="SE Sem 1"></v-checkbox>
                <v-checkbox class="custom_colors text-h7 mt-n8" label="SE Sem 2" value="SE Sem 2"></v-checkbox>
                <v-checkbox class="custom_colors text-h7 mt-n8" label="TE Sem 1" value="TE Sem 1"></v-checkbox>
                <v-checkbox class="custom_colors text-h7 mt-n8" label="TE Sem 2" value="TE Sem 2"></v-checkbox>
                <v-checkbox class="custom_colors text-h7 mt-n8" label="None" value="None"></v-checkbox>
              </v-checkbox-group>
              <h4 class="text-h7 font-weight-bold text-primary">
                Total passive backlogs *
              </h4>
              <p class="custom_colors text-h7">
                If you have no passive backlogs, enter 0. If you get a Backlog
                in previous semester and you have cleared it then it will be
                considered as Passive Backlog.
              </p>
              <v-text-field v-model="formData.passive_backlogs" type="number" class="custom_textfield"
                placeholder="enter here" variant="underlined" color="primary"
                :rules="[(v) => !!v || 'This is required field']"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary">
                Are you YD (Year Down)? *
              </h4>
              <v-text-field v-model="formData.year_down" class="custom_textfield" placeholder="Yes/No"
                variant="underlined" color="primary" :rules="[(v) => !!v || 'This is required field']"></v-text-field>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card class="text-justify pa-5">
              <h4 class="text-h7 font-weight-bold text-primary mb-1">
                Aadhar Number
              </h4>
              <p class="custom_colors text-h7">Do NOT put spaces and dashes</p>
              <v-text-field v-model="formData.aadhar_number" type="number" class="custom_textfield"
                placeholder="enter here" variant="underlined" color="primary" :rules="[
                  (v) => !!v || 'Aadhar number is required',
                  (v) =>
                    /^\d{12}$/.test(v) ||
                    'Enter a valid 12-digit aadhar number',
                ]" :readonly="isreadonly"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary mb-1">
                PAN Number *
              </h4>
              <p class="custom_colors text-h7">
                If you don't have PAN Card, put N/A (without quotes) and apply
                for PAN ASAP. If you applied and in process then also put NA
                (without quotes)
              </p>
              <v-text-field v-model="formData.pan_number" class="custom_textfield" placeholder="enter here"
                variant="underlined" color="primary" :rules="[(v) => !!v || 'This is required field']"
                @input="formData.pan_number = formData.pan_number.toUpperCase()" :readonly="isreadonly"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary mb-1">
                Passport Number *
              </h4>
              <p class="custom_colors text-h7">
                If you don't have Passport, put N/A (without quotes) and apply
                for PAN ASAP. If you applied and in process then also put NA
                (without quotes)
              </p>
              <v-text-field v-model="formData.passport_number" class="custom_textfield" placeholder="enter here"
                variant="underlined" color="primary" :rules="[(v) => !!v || 'This is required field']" @input="
                  formData.passport_number =
                  formData.passport_number.toUpperCase()
                  " :readonly="isreadonly"></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary mb-1">
                Citizenship *
              </h4>
              <p class="custom_colors text-h7">Ex- Indian</p>
              <v-text-field v-model="formData.citizenship" class="custom_textfield" placeholder="enter here"
                variant="underlined" color="primary" :rules="[(v) => !!v || 'This is required field']" :readonly="isreadonly"></v-text-field>
            </v-card>
          </v-col>
        </v-row>

        <!-- Page 4: Additional Details -->
        <v-row justify="center" v-if="page === 4">
          <v-col cols="12">
            <v-card class="text-justify pa-5">
              <h1 class="text-h5 font-weight-bold text-primary mb-1">
                Upload PDF of Documents *
              </h1>
              <v-divider></v-divider>
              <br />
              <h4 class="text-h7 font-weight-bold text-primary mb-1">
                Naming of file should be
                College-Registration-No_FirstNameLastName_Documents.pdf<br />eg:
                E2K19122868_ShubhJain_Documents.pdf
              </h4>
              <p class="custom_colors text-h7">
                Please ensure that your document is submitted in the same order.
                Each document should be self attested with Full Name and
                Signature on individual document. Make a single PDF.
              </p>
              <br />
              <p class="custom_colors text-h7">
                1. 12th Grade Marksheet (Self Attested)<br />
                2. 12th Grade / Diploma Marksheet(Self Attested)<br />
                3. FE Sem 1 Original Marksheet (Self Attested)<br />
                4. FE Sem 2 Original Marksheet (Self Attested)<br />
                5. Attach Calculation of SGPA for FE SEM 2<br />
                6. SE Sem 1 Original Marksheet (Self Attested)<br />
                7. SE Sem 2 Original Marksheet (Self Attested)<br />
                8. Attach Calculation of SGPA for SE SEM 2<br />
                9. TE Sem 1 Original Marksheet (Self Attested)<br />
                12. TE Sem 2 Online Marksheet (Self Attested)<br />
                11. Attach Calculation of SGPA for TE SEM 2<br />
                12. College ID (both sides) (Self Attested)<br />
                13. Aadhar Card (both sides) (Self Attested)<br />
                14. PAN Card (both sides) (Self Attested)<br />
                15. Passport (both sides) (Self Attested)<br />
                16. AMCAT Test Payment Receipt (Self Attested)
              </p>
              <v-file-input label="Upload here" variant="underlined" color="primary" style="color: rgba(8, 30, 127)"
                v-model="formData.documents" :rules="[
                  (v) => (v && v.length > 0) || 'This is a required field',
                ]"></v-file-input>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card class="text-justify pa-5">
              <h1 class="text-h5 font-weight-bold text-primary mb-2">
                AMCAT Test Result
              </h1>
              <h4 class="text-h7 font-weight-bold text-primary mb-0">
                Enter ELQ Score
              </h4>
              <p class="custom_colors text-h7">Enter correct score. If not given amcat then enter -1 here.</p>
              <v-text-field v-model="formData.elq_score" class="custom_textfield" placeholder="Enter here"
                variant="underlined" color="primary" :rules="[(v) => !!v || 'This is required']"
                required></v-text-field>
              <h4 class="text-h7 font-weight-bold text-primary mb-0">
                Enter Automata Score
              </h4>
              <p class="custom_colors text-h7">Enter correct score. If not given amcat then enter -1 here.</p>
              <v-text-field v-model="formData.automata_score" class="custom_textfield" placeholder="Enter here"
                variant="underlined" color="primary" :rules="[(v) => !!v || 'This is required']"
                required></v-text-field>

              <h4 class="text-h7 font-weight-bold text-primary mb-0">
                Upload PDF of Amcat Test Result
              </h4>
              <p class="custom_colors text-h7">
                Naming of file should be College-Registration-No_FirstNameLastName_
                AMCAT_Result.pdf <br />eg:
                E2K19122868_ShubhJain_AMCAT_Result.pdf
              </p>
              <p class="custom_colors text-h7">
                <strong>Self attest with Full Name and Signature <br />Upload whole
                  PDF</strong>
              </p>
              <v-file-input label="Upload here" variant="underlined" color="primary" style="color: rgba(8, 30, 127)"
                v-model="formData.amcat_result" :rules="[
                  (v) => (v && v.length > 0) || 'This is a required field',
                ]"></v-file-input>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card class="text-justify pa-5">
              <h1 class="text-h5 font-weight-bold text-primary mb-1">
                Upload PDF of BE Fee Receipt
              </h1>
              <p class="custom_colors text-h7">
                Naming of file should be
                College-Registration-No_FirstNameLastName_BE_Fee_Receipt.pdf
              </p>
              <p class="custom_colors text-h7">
                <strong>Self attest with Full Name and Signature<br />eg:
                  E2K19122868_ShubhJain_BE_Fee_Receipt.pdf</strong>
              </p>
              <v-file-input label="Upload here" variant="underlined" color="primary" style="color: rgba(8, 30, 127)"
                v-model="formData.be_receipt" :rules="[
                  (v) => (v && v.length > 0) || 'This is a required field',
                ]"></v-file-input>
            </v-card>
          </v-col>

          <v-col cols="12">
            <v-card class="text-justify pa-5">
              <h4 class="text-h7 font-weight-bold text-primary mb-1">
                Set Password
              </h4>
              <p class="custom_colors text-h7">
                Password should be strong and at least 8 characters long.
              </p>
              <v-text-field v-model="formData.password" label="Password" class="mb-1 pa-1"
                :type="show2 ? 'text' : 'password'" placeholder="Enter your password"
                :append-inner-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'" variant="underlined" color="primary"
                style="color: rgba(8, 30, 127)" @click:append-inner="show2 = !show2" :rules="[
                  (v) => !!v || 'Password is required',
                  (v) =>
                    (v && v.length >= 8) ||
                    'Password must be at least 8 characters long',
                ]"></v-text-field>
            </v-card>
          </v-col>

          <v-row class="d-flex justify-start mt-4 mr-1">
            <v-col cols="3">
              <v-btn class="bg-primary" size="x-large" type="submit" block :loading="loader">
                Submit
              </v-btn></v-col>
          </v-row>
        </v-row>
      </v-form>
      <v-pagination v-model="page" :length="4" :total-visible="4" active-color="primary"
        @update:model-value="preventJump"></v-pagination>

      <v-row class="mt-4 justify-center">
        <!-- Previous Button -->
        <v-col cols="auto">
          <v-btn class="bg-primary" size="large" @click="prevPage" :disabled="page === 1">
            Previous
          </v-btn>
        </v-col>

        <!-- Next Button -->
        <v-col cols="auto">
          <v-btn class="bg-primary" size="large" @click="validateAndNextPage" :disabled="page === 4">
            Next
          </v-btn>
        </v-col>
      </v-row>
    </div>
  </v-container>
</template>

<script>
import Nav from "@/components/BaseComponents/NavBar.vue";
import { toast } from "vue3-toastify";
import "vue3-toastify/dist/index.css";
import axios from "axios";

export default {
  components: {
    "nav-bar": Nav,
  },

  data() {
    return {
      loader: false,
      showPopup: false,
      show2: false,
      showform: false,
      page: 1,
      search_reg: "",
      show1: false,
      erp_reg: "",
      erp_password: "",
      isreadonly:false,
      formData: {
        full_name: "",
        primary_email: "",
        alternate_email: "",
        primary_mobile_number: null,
        alternate_mobile_number: null,
        date_of_birth: null,
        gender: "",
        current_address: "",
        city: "",
        state: "",
        permanent_address: "",
        branch: "",
        division: "",
        roll_number: null,
        university_prn: "",
        pict_registration_id: "",
        percentage_10th: null,
        board_10th: "",
        passing_year_10th: null,
        no_of_gap_years_after_10th: null,
        reason_of_gap_after_10th: "",
        after_10th_appeared_for: "",
        percentage_12th: null,
        board_12th: "",
        passing_year_12th: null,
        no_of_gap_years_after_12th: null,
        reason_of_gap_after_12th: "",
        percentage_diploma: null,
        university_of_diploma: "",
        passing_year_diploma: null,
        no_of_gap_years_after_diploma: null,
        reason_of_gap_after_diploma: "",
        percentile_cet: null,
        percentile_jee: null,
        college_started_year: null,
        sgpa_fe_sem_1: null,
        sgpa_fe_sem_2: null,
        sgpa_se_sem_1: null,
        sgpa_se_sem_2: null,
        sgpa_te_sem_1: null,
        sgpa_te_sem_2: null,
        active_backlogs: null,
        active_backlog_semesters: "",
        passive_backlogs: null,
        year_down: "",
        aadhar_number: null,
        pan_number: "",
        passport_number: "",
        citizenship: "",
        documents: null,
        amcat_result: null,
        be_receipt: null,
        password: "",
        elq_score: null,
        automata_score: null,
      },
    };
  },
  methods: {
    async validateAndNextPage() {
      const form = this.$refs.form;
      if (!form) return;

      const { valid } = await form.validate();

      if (valid) {
        this.page++;
      } else {
        toast.error("⚠️ Please fill all fields!", {
          position: "top-center",
          autoClose: 4000,
          style: {
            width: "600px",
            height: "400px",
            fontSize: "18px",
            padding: "20px",
            textAlign: "center",
          },
        });
        return;
      }
    },

    prevPage() {
      if (this.page > 1) this.page--;
    },
    async getdetails() {
      this.loader = true;
      const obj = {
        pictRegistrationId: this.erp_reg,
        password: this.erp_password,
      };
      axios
        .post(
          "https://tnp-portal-backend-tpx5.onrender.com/api/v1/users/login-and-get-user",
          obj
        )
        .then((response) => {
          this.showform = true
          toast.success("Student Details Filled, please fill other Fields!", {
            position: "top-center",
            autoClose: 4000,
            style: {
              width: "500px",
              height: "200px",
              fontSize: "16px",
              padding: "10px",
              textAlign: "center",
            },
          });
          this.erp_reg = '';
          this.erp_password = '';
          const user = response.data.user
          console.log(user)
          this.formData.full_name = user.fullName;
          this.formData.aadhar_number = user.aadharNumber;
          this.formData.after_10th_appeared_for = user.after10thAppearedFor;
          this.formData.board_10th = user.board10th;
          this.formData.board_12th = user.board12th;
          this.formData.branch = user.branch;
          this.formData.citizenship = user.citizenship;
          this.formData.city = user.city;
          this.formData.college_started_year = user.collegeStartedYear;
          this.formData.date_of_birth = user.dateOfBirth ? new Date(user.dateOfBirth).toISOString().split('T')[0] : null; 
          this.formData.gender = user.gender;
          this.formData.id = user.id;
          this.formData.no_of_gap_years_after_10th = user.noOfGapYearsAfter10th;
          this.formData.no_of_gap_years_after_12th = user.noOfGapYearsAfter12th;
          this.formData.no_of_gap_years_after_diploma = user.noOfGapYearsAfterDiploma;
          this.formData.pan_number = user.panNumber;
          this.formData.passing_year_10th = user.passingYear10th;
          this.formData.passing_year_12th = user.passingYear12th;
          this.formData.passing_year_diploma = user.passingYearDiploma;
          this.formData.passport_number = user.passportNumber;
          this.formData.password = user.password;
          this.formData.percentage_10th = user.percentage10th;
          this.formData.percentage_12th = user.percentage12th;
          this.formData.percentage_diploma = user.percentageDiploma;
          this.formData.percentile_cet = user.percentileCet;
          this.formData.percentile_jee = user.percentileJee;
          this.formData.permanent_address = user.permanentAddress;
          this.formData.pict_registration_id = user.pictRegistrationId;
          this.formData.reason_of_gap_after_10th = user.reasonOfGapAfter10th;
          this.formData.reason_of_gap_after_12th = user.reasonOfGapAfter12th;
          this.formData.reason_of_gap_after_diploma = user.reasonOfGapAfterDiploma;
          this.formData.state = user.state;
          this.formData.university_of_diploma = user.universityOfDiploma;
          this.formData.university_prn = user.universityPRN;
          this.loader = false;
          this.isreadonly=true
        })
        .catch((error) => {
          toast.error(
            "Your request could not be sent. Please try again later.",
            {
              position: "top-center",
              autoClose: 4000,
              style: {
                width: "500px",
                height: "200px",
                fontSize: "16px",
                padding: "10px",
                textAlign: "center",
              },
            }
          );
          console.error(error);
          this.loader = false;
        });
    },
    async submitForm() {
      this.loader = true;
      const form = this.$refs.form;
      if (!form) return;
      const { valid } = await form.validate();
      if (!valid) {
        toast.error("Please fill all fields!", {
          position: "top-center",
          autoClose: 4000,
          style: {
            width: "600px",
            height: "400px",
            fontSize: "18px",
            padding: "20px",
            textAlign: "center",
          },
        });
        this.loader = false;
        return;
      }
      console.log(this.formData);
      const data = new FormData();
      Object.keys(this.formData).forEach((key) => {
        if (this.formData[key] !== null && this.formData[key] !== "") {
          data.append(key, this.formData[key]);
        }
      });

      try {
        const response = await axios.post(
          "https://tnp-portal-backend-tpx5.onrender.com/api/v1/students",
          data,
          {
            headers: {
              "Content-Type": "multipart/form-data",
            },
          }
        );
        console.log("Response:", response.data);
        this.loader = false;
        this.$router.push("/wait");
      } catch (error) {
        toast.error(" Please fill Valid fields!", {
          position: "top-center",
          autoClose: 4000,
          style: {
            width: "600px",
            height: "400px",
            fontSize: "18px",
            padding: "20px",
            textAlign: "center",
          },
        });
        this.loader = false;
        console.error("Error uploading:", error);
      }
    },
  },
};
</script>
<style scoped>
.custom_colors {
  color: rgba(8, 30, 127, 0.6);
}

.custom_textfield {
  color: rgba(8, 30, 127);
}
</style>