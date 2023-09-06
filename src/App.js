import "./App.css";
import Form from "./Form";
import ConfirmDialog from "./ConfirmDialog";
import RegistrationDialog from "./RegistrationDialog";
import { useState } from "react";

function App() {
  const [user, setUser] = useState({});
  const [confirmationOpen, setConfirmationOpen] = useState(false);
  const [isConfirmed, setIsConfirmed] = useState(false);
  const [isFilter, setIsFilter] = useState("no-filter");
  const confirmUserData = (data) => {
    setUser(data);
    setConfirmationOpen(true);
    setIsFilter("filter");
  };

  const closeDialog = () => {
    setConfirmationOpen(false);
    setIsFilter("no-filter");
  };

  const confirm = () => {
    closeDialog();
    setIsConfirmed(true);
  };

  return (
    <main className="App">
      <div className={isFilter}>
        {isConfirmed ? (
          <RegistrationDialog email={user.email} />
        ) : (
          <Form onSubmit={confirmUserData} />
        )}
      </div>
      <ConfirmDialog
        title="Confirmation your registration!"
        cancel={closeDialog}
        open={confirmationOpen}
        confirm={confirm}
      >
        {" "}
        <p>Please, confirm your email: {user.email}!</p>
      </ConfirmDialog>
    </main>
  );
}

export default App;
