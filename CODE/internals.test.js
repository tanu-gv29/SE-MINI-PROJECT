const { calculateSubjectInternal, populateSubjects, updateCourses } = require("./internals");

describe("internals.js tests", () => {
    beforeEach(() => {
        // Set up a mock DOM environment
        document.body.innerHTML = `
            <select id="regulation"></select>
            <select id="course"></select>
            <select id="semester"></select>
            <div id="subjectsContainer"></div>
        `;
    });

    test("calculateSubjectInternal calculates internal GPA correctly", () => {
        const mockSubject = { credit: 4, subject: "Test Subject" };
        const subjectContainer = document.createElement("div");
        subjectContainer.innerHTML = `<div class="result-display"></div>`;
        document.body.appendChild(subjectContainer);

        calculateSubjectInternal(mockSubject, subjectContainer, 0);

        const resultDisplay = subjectContainer.querySelector(".result-display");
        expect(resultDisplay.innerHTML).toContain("is contributing");
    });

    test("populateSubjects correctly populates subjects into the container", () => {
        localStorage.setItem("selectedRegulation", "2019");
        localStorage.setItem("selectedCourse", "AI-DS");
        localStorage.setItem("selectedSemester", "Semester 4");

        populateSubjects();

        const subjectContainers = document.querySelectorAll(".subject-container");
        expect(subjectContainers.length).toBe(5); // Matches 5 subjects in the test data
    });

    test("updateCourses populates course dropdown based on selected regulation", () => {
        const regulationDropdown = document.getElementById("regulation");
        regulationDropdown.innerHTML = `<option value="2019">2019</option>`;
        regulationDropdown.value = "2019";

        updateCourses();

        const courseDropdown = document.getElementById("course");
        const options = courseDropdown.querySelectorAll("option");
        expect(options.length).toBeGreaterThan(0); // Ensure options are added
    });
});

console.log({ calculateSubjectInternal, populateSubjects, updateCourses });
