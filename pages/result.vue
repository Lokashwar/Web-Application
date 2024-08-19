<template>
  <div class="student-details-container">
    <h1 class="student-details-header">Results</h1>
    <!-- Examination Details Table -->
    <table class="student-table" v-if="examinations.length > 0">
      <thead>
        <tr>
          <th>ID</th>
          <th>Course ID</th>
          <th>Type</th>
          <th>Name</th>
          <th>Date</th>
          <th>Total Marks</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="exam in examinations" :key="exam.id">
          <td>{{ exam.id }}</td>
          <td>{{ exam.course_id }}</td>
          <td>{{ exam.type }}</td>
          <td>{{ exam.name }}</td>
          <td>{{ exam.date || 'N/A' }}</td>
          <td>{{ exam.total_mark }}</td>
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
    const examinations = ref([]);

    async function fetchExaminationData() {
      try {
        const response = await fetch("https://cblaze-product.trainingzone.in/api/examinations", {
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

        // Store the examinations array from the API data
        examinations.value = data.examinations || [];

        // Log the parsed examinations array
        console.log('Examinations:', examinations.value);
      } catch (error) {
        console.error('Error fetching examination data:', error);
      }
    }

    onMounted(fetchExaminationData);

    return {
      examinations,
    };
  },
};
</script>

<style scoped>
/* Container styling to match header padding */
.student-details-container {
  padding: 0.5rem 1rem; /* Match the header's left and right padding */
}

/* Student Details Header */
.student-details-header {
  font-size: 1.8rem;
  font-weight: bold;
  text-align: center;
  margin-bottom: 20px;
}

/* Student Details Table Styles */
.student-table {
  width: 100%;
  border-collapse: collapse;
  font-family: Arial, sans-serif;
  border-radius: 12px;
  overflow: hidden;
}

.student-table th,
.student-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #ddd;
}

.student-table th {
  background: linear-gradient(90deg, #6a11cb 0%, #2575fc 100%);
  color: #fff;
  font-weight: bold;
}

.student-table tr {
  transition: background-color 0.3s ease;
}

.student-table tr:hover {
  background-color: #e0e7ff; /* Subtle hover effect */
}

.student-table tr:nth-child(even) {
  background-color: #f9f9f9;
}

.student-table tbody tr:last-child td {
  border-bottom: none; /* Remove border on the last row to avoid double border */
}

@media (max-width: 768px) {
  .student-table th,
  .student-table td {
    padding: 8px 10px;
    font-size: 0.9rem;
  }

  .student-details-header {
    font-size: 1.5rem;
  }
}
</style>
