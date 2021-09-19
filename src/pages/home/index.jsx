import React from "react";
import "./styles.css";
import Button from "../../components/button";

const Home = ({ history }) => {
  return (
    <div className="home">
      <div className="home_container">
        <Button
          onClick={() => history.push("/native-form")}
          label="RHF + Inputs Nativos"
        />
        <Button
          onClick={() => history.push("/material-ui-form")}
          label="RHF + Material UI"
        />
        <Button
          onClick={() => history.push("/multi-steps")}
          label="RHF + Wizard Form"
        />
      </div>
    </div>
  );
};

export default Home;
