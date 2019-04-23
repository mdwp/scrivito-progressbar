import * as React from "react";
import * as Scrivito from "scrivito";

Scrivito.provideComponent("ProgressBarWidget", ({ widget }) => {
  const percent = widget.get('percent');
  const title = widget.get('title');
  const color = widget.get('color') || 'primary';

  if (!percent && Scrivito.isInPlaceEditingActive()) {
    return (
        <h4 className="text-center">
          Provide the progress bar values in the widget properties.
        </h4>
    );
  }

  return (
    <div className="text-center">
      <div className="progress-bar-wrapper">
      <div className={`progress-title-wrapper text-left bg-${color}`} style={{width:percent+'%'}} >
        <div className="progress-title">{title}</div>
      </div>
      <div className="progress-percent text-center">{percent}%</div>
    </div>
    </div>
  )
});



