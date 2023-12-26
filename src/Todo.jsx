/* eslint-disable react/prop-types */
/* eslint-disable no-unused-vars */
// import React from "react";

// const Todo = ({ task, isDone }) => {
//   return (
//     // <div>
//     //   {/* <li>Task: {task}</li> */}
//     // </div>
//     if(isDone) {
//         return <li>{task}</li>
//     } else {
//         <li>{task}</li>
//     }
//   )
// };

// export default Todo;

// export default function Todo({ task, isDone }) {
//   if (isDone === true) {
//     return <li>Finished: {task}</li>;
//   } else {
//     <li>Work On: {task}</li>;
//   }
// }

// export default function Todo({ task, isDone }) {
//   if (isDone) {
//     return <li>Finished: {task}</li>;
//   } else {
//     <li>Work On: {task}</li>;
//   }
// }

// export default function Todo({ task, isDone }) {
//   return <li>Task: {task}</li>;
// }

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {isDone ? "Finish" : "Work on"}: {task}
//     </li>
//   );
// }

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task} {isDone && "Done"}
//     </li>
//   );
// }

// export default function Todo({ task, isDone }) {
//   return (
//     <li>
//       {task} {isDone || "Do It"}
//     </li>
//   );
// }

export default function Todo({ task, isDone }) {
  let listItem;
  if (isDone) {
    listItem = <li>Finished: {task}</li>;
  } else {
    listItem = <li>Work On: {task}</li>;
  }
  return listItem;
}
