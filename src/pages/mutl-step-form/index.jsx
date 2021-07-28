import React, { useState } from 'react';
import './styles.css';

import { Route, Switch } from 'react-router-dom';
import Step1 from './Step1';
import Step2 from './Step2';
import Step3 from './Step3';
import Step4 from './Step4';
import Step5 from './Step5';
import Result from './Result';

function MultiStepForm() {
  const [show, setShow] = useState(false);
  return (
    <div className="container__multi-step">
      {show && <h1 className="multi-step__title">Cadastro Multi Steps</h1>}
      <Switch>
        <Route exact path="/" component={Step1} />
        <Route path="/step2" component={Step2} />
        <Route path="/step3" component={Step3} />
        <Route path="/step4" component={Step4} />
        <Route path="/step5" component={Step5} />
        <Route path="/result" component={() => <Result setShow={setShow} />} />
      </Switch>
    </div>
  );
}

export default MultiStepForm;
