export const FormSongwriter = {
  name: 'FormSongwriter',
  type: 'response',
  match: ({ trace }) =>
    trace.type === 'ext_form_songwriter' ||
    trace.payload.name === 'ext_form_songwriter',
  render: ({ trace, element }) => {
    const formContainer = document.createElement('form');

    formContainer.innerHTML = `
          <style>
            label {
              font-size: 0.8em;
              color: #888;
            }
            input[type="text"], input[type="email"], input[type="tel"], select {
              width: 100%;
              border: none;
              border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
              background: transparent;
              margin: 5px 0;
              outline: none;
            }
            .invalid {
              border-color: red;
            }
            .submit {
              background: linear-gradient(to right, #2e6ee1, #2e7ff1 );
              border: none;
              color: white;
              padding: 10px;
              border-radius: 5px;
              width: 100%;
              cursor: pointer;
            }
          </style>

          <label for="name">Full Name</label>
          <input type="text" class="name" name="name" required><br><br>

          <label for="email">Email</label>
          <input type="email" class="email" name="email" required pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" title="Invalid email address"><br><br>

          <label for="ipi">IPI</label>
          <input type="text" class="ipi" name="ipi" required><br><br>

          <label for="percentage">Ownership percentage</label>
          <input type="text" class="percentage" name="percentage" required><br><br>
          
          <label for="role">Role</label>
          <select class="role" name="percentage" required>
          <option>Composer/author</option>
          <option>Author</option>
          <option>Adapter</option>
          <option>Arranger</option>
          <option>Composer</option>
          <option>Translator</option>
          <option>Sub arrange</option>
          <option>Sub author</option>
          </select><br><br>

          <label for="affiliations">PRO Affiliations</label>
          <input type="text" class="affiliations" name="affiliations" required><br><br>
          
          <input type="submit" class="submit" value="Submit">
        `;

    formContainer.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = formContainer.querySelector('.name');
      const email = formContainer.querySelector('.email');
      const ipi = formContainer.querySelector('.ipi');
      const percentage = formContainer.querySelector('.percentage');
      const role = formContainer.querySelector('.role');
      const affiliations = formContainer.querySelector('.affiliations');

      if (
        !name.checkValidity() ||
        !email.checkValidity() ||
        !ipi.checkValidity() ||
        !percentage.checkValidity() ||
        !role.checkValidity() ||
        !affiliations.checkValidity()
      ) {
        name.classList.add('invalid');
        email.classList.add('invalid');
        ipi.classList.add('invalid');
        percentage.classList.add('invalid');
        role.classList.add('invalid');
        affiliations.classList.add('invalid');
        return;
      }

      formContainer.querySelector('.submit').remove();

      window.voiceflow.chat.interact({
        type: 'complete',
        payload: {
          name: name.value || null,
          email: email.value || null,
          ipi: ipi.value || null,
          percentage: percentage.value || null,
          role: role.value || null,
          affiliations: affiliations.value || null,
        },
      });
    });

    element.appendChild(formContainer);
  },
};

export const FormPublisher = {
  name: 'FormPublisher',
  type: 'response',
  match: ({ trace }) =>
    trace.type === 'ext_form_publisher' ||
    trace.payload.name === 'ext_form_publisher',
  render: ({ trace, element }) => {
    const formContainer = document.createElement('form');

    formContainer.innerHTML = `
          <style>
            label {
              font-size: 0.8em;
              color: #888;
            }
            input[type="text"], input[type="email"], input[type="tel"], select {
              width: 100%;
              border: none;
              border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
              background: transparent;
              margin: 5px 0;
              outline: none;
            }
            .invalid {
              border-color: red;
            }
            .submit {
              background: linear-gradient(to right, #2e6ee1, #2e7ff1 );
              border: none;
              color: white;
              padding: 10px;
              border-radius: 5px;
              width: 100%;
              cursor: pointer;
            }
          </style>

          <label for="name">Full Name</label>
          <input type="text" class="name" name="name" required><br><br>

          <label for="ipi">IPI</label>
          <input type="text" class="ipi" name="ipi" required><br><br>

          <label for="percentage">Ownership percentage</label>
          <input type="text" class="percentage" name="percentage" required><br><br>

          <label for="affiliations">PRO Affiliations</label>
          <input type="text" class="affiliations" name="affiliations" required><br><br>
          
          <input type="submit" class="submit" value="Submit">
        `;

    formContainer.addEventListener('submit', function (event) {
      event.preventDefault();

      const name = formContainer.querySelector('.name');
      const ipi = formContainer.querySelector('.ipi');
      const percentage = formContainer.querySelector('.percentage');
      const affiliations = formContainer.querySelector('.affiliations');

      if (
        !name.checkValidity() ||
        !ipi.checkValidity() ||
        !percentage.checkValidity() ||
        !affiliations.checkValidity()
      ) {
        name.classList.add('invalid');
        ipi.classList.add('invalid');
        percentage.classList.add('invalid');
        affiliations.classList.add('invalid');
        return;
      }

      formContainer.querySelector('.submit').remove();

      window.voiceflow.chat.interact({
        type: 'complete',
        payload: {
          name: name.value || null,
          ipi: ipi.value || null,
          percentage: percentage.value || null,
          affiliations: affiliations.value || null,
        },
      });
    });

    element.appendChild(formContainer);
  },
};

export const FormRecordingDetails = {
  name: 'FormRecordingDetails',
  type: 'response',
  match: ({ trace }) =>
    trace.type === 'ext_form_recording_details' ||
    trace.payload.name === 'ext_form_recording_details',
  render: ({ trace, element }) => {
    const formContainer = document.createElement('form');

    formContainer.innerHTML = `
          <style>
            label {
              font-size: 0.8em;
              color: #888;
            }
            input[type="text"], input[type="email"], input[type="tel"], select {
              width: 100%;
              border: none;
              border-bottom: 0.5px solid rgba(0, 0, 0, 0.1);
              background: transparent;
              margin: 5px 0;
              outline: none;
            }
            .invalid {
              border-color: red;
            }
            .submit {
              background: linear-gradient(to right, #2e6ee1, #2e7ff1 );
              border: none;
              color: white;
              padding: 10px;
              border-radius: 5px;
              width: 100%;
              cursor: pointer;
            }
          </style>

          <label for="isrc">ISRC</label>
          <input type="text" class="isrc" name="isrc" required><br><br>

          <label for="iswc">ISWC</label>
          <input type="text" class="iswc" name="iswc"><br><br>

          <label for="rights">Territorial Rights</label>
          <input type="text" class="rights" name="rights" required><br><br>
          
          <input type="submit" class="submit" value="Submit">
        `;

    formContainer.addEventListener('submit', function (event) {
      event.preventDefault();

      const isrc = formContainer.querySelector('.isrc');
      const iswc = formContainer.querySelector('.iswc');
      const rights = formContainer.querySelector('.rights');

      if (
        !isrc.checkValidity() ||
        !iswc.checkValidity() ||
        !rights.checkValidity()
      ) {
        isrc.classList.add('invalid');
        iswc.classList.add('invalid');
        rights.classList.add('invalid');
        return;
      }

      formContainer.querySelector('.submit').remove();

      window.voiceflow.chat.interact({
        type: 'complete',
        payload: {
          isrc: isrc.value || null,
          iswc: iswc.value || null,
          rights: rights.value || null,
        },
      });
    });

    element.appendChild(formContainer);
  },
};
