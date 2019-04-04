import * as React from "react";
import * as Scrivito from "scrivito";
import { Progress } from 'react-sweet-progress';


Scrivito.provideComponent("ProgressBarWidget", ({ widget }) => {
  const type = widget.get('type') || 'percent';
  const percent = widget.get('percent') || 50;
  const status = widget.get('status') || 'active';

  return (
    <div className="text-center">
      <Progress type={type} percent={percent} status={status} />
    </div>
  )
});


