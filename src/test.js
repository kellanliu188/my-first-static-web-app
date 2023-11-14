// const gql = `
//         query getById($department_id: Int!) {
//           course_data_by_pk(department_id: $department_id) {
//           course_name, 
//           course_description,
//           semester_name
//         }
//       }`;

//       const query = {
//         query: gql,
//         variables: {
//           class_id: class_id,
//         },
//       };
//       const endpoint = "/data-api/graphql";
//       console.log(JSON.stringify(query));
//       const response = await fetch(endpoint, {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
//         body: JSON.stringify(query),
//       });

//       console.log(response);
//       const result = await response.json();
//       console.log(result);
//       console.log("seeing class data for ", department_id, data.course_data_by_pk);