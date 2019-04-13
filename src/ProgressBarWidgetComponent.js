import * as React from "react";
import * as Scrivito from "scrivito";
import { Progress } from 'react-sweet-progress';


Scrivito.provideComponent("ProgressBarWidget", ({ widget }) => {
  const type = widget.get('type') || 'percent';
  const percent = widget.get('percent');
  const status = widget.get('status') || 'active';

  if (!percent.length && Scrivito.isInPlaceEditingActive()) {
    return (
        <h4 className="text-center">
          Provide the progress bar values in the widget properties.
        </h4>
    );
  }

  return (
    <div className="text-center">
      <Progress type={type} percent={percent} status={status} />
    </div>
  )
});


