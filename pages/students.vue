<template>
  <div>
    <h1>Student Details</h1>
    <!-- Student Details Table -->
    <table class="student-table" v-if="students.length > 0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>College ID</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="student in students" :key="student.id">
          <td>{{ student.id }}</td>
          <td>{{ student.name }}</td>
          <td>{{ student.roll_no }}</td>
        </tr>
      </tbody>
    </table>
    <p v-else>Loading data...</p>
  </div>
</template>

<script>
import { ref, onMounted } from 'vue';

export default {
  setup() {
    const students = ref([]);

    async function fetchStudentData() {
      try {
        const response = await fetch("https://cblaze-product.trainingzone.in/api/students/ut", {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch data');
        }

        const data = await response.json();

        // Log the data to inspect its structure
        console.log('API Data:', data);

        // Assuming the data you need is in a specific format
        students.value = data.students || data.assessments || data.questions || []; // Adjust this based on actual data structure

        // Log the parsed students array
        console.log('Students:', students.value);
      } catch (error) {
        console.error('Error fetching student data:', error);
      }
    }

    onMounted(fetchStudentData);

    return {
      students,
    };
  },
};
</script>

<style scoped>
/* Student Details Table Styles */
.student-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 20px;
  font-family: Arial, sans-serif;
}

.student-table th,
.student-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.student-table th {
  background-color: #f4f4f4;
  color: #333;
  font-weight: bold;
}

.student-table tr:hover {
  background-color: #f1f1f1;
}

.student-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

@media (max-width: 768px) {
  .student-table th,
  .student-table td {
    padding: 8px 10px;
    font-size: 0.9rem;
  }
}
</style>
