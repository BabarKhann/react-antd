import React from "react";

import { Button, DatePicker, version } from "antd";
import "antd/dist/antd.css";

function App() {
  return (
    <div className="App">
      <h2>antd version: {version}</h2>
      <DatePicker />
      <Button type="primary" style={{ marginLeft: 8 }}>
        Primary Button
      </Button>
    </div>
  );
}

export default App;
