<template>
    <div class="student-details-container">
      <h1 class="student-details-header">Examination</h1>
      <!-- Student Details Table -->
      <table class="student-table" v-if="students.length > 0">
        <thead>
          <tr>
            <th>Subject ID</th>
            <th>Student ID</th>
            <th>Score</th>
            <th>Maximum Score</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="student in students" :key="student.id">
            <td>{{ student.subject_id }}</td>
            <td>{{ student.student_id }}</td>
            <td>{{ student.score }}</td>
            <td>{{ student.max_score }}</td>
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
          const response = await fetch("https://cblaze-product.trainingzone.in/api/internal-assessments", {
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
  