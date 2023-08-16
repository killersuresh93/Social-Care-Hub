import * as React from 'react';

export default function TextEditor() {
  return (
    <div className="text-editor">
      <div className="text-editor-menu">
        <div className="text-editor-icons">
          <select
            className=" icon form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option selected>Segoe UI</option>
            <option value="1">Arial</option>
            <option value="2">Times Roman</option>
            <option value="3">Three</option>
          </select>
          <select
            className=" icon form-select form-select-sm"
            aria-label=".form-select-sm example"
          >
            <option selected>12</option>
            <option value="1">13</option>
            <option value="2">14</option>
            <option value="3">15</option>
          </select>
          <a className="icon">
            <i className="fa fa-list" aria-hidden="true"></i>
          </a>
          <a className="icon">
            <i className="fa fa-list-ol" aria-hidden="true"></i>
          </a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a className="icon-left-border">
            <i className="fa fa" aria-hidden="true"></i>
          </a>
          <a className="icon">
            <i className="fa fa-link" aria-hidden="true"></i>
          </a>
        </div>
        <div className="text-editor-icons">
          <a className="icon">
            <i className="fa fa-undo" aria-hidden="true"></i>
          </a>
          <a className="icon">
            <i className="fa fa-repeat" aria-hidden="true"></i>
          </a>
          <a className="icon-left-border">
            <i className="fa fa" aria-hidden="true"></i>
          </a>
          <a className="icon">
            <i className="fa fa-bold" aria-hidden="true"></i>
          </a>
          <a className="icon">
            <i className="fa fa-italic" aria-hidden="true"></i>
          </a>
          <a className="icon">
            <i className="fa fa-underline" aria-hidden="true"></i>
          </a>
          <a className="icon">
            <i className="fa fa-font" aria-hidden="true"></i>
          </a>
          <a className="icon-left-border">
            <i className="fa fa" aria-hidden="true"></i>
          </a>
          <a className="icon">
            <i className="fa fa-align-left" aria-hidden="true"></i>
          </a>
          <a className="icon">
            <i className="fa fa-align-center" aria-hidden="true"></i>
          </a>
          <a className="icon">
            <i className="fa fa-align-right" aria-hidden="true"></i>
          </a>
          &nbsp; &nbsp;
          <a className="icon-left-border">
            <i className="fa fa" aria-hidden="true"></i>
          </a>
        </div>
      </div>
      <textarea className="text-editor-textarea"></textarea>
      <div className="text-editor-button-row">
        <button className="text-editor-button">Ok</button>
        <button className="text-editor-button">Cancel</button>
      </div>
    </div>
  );
}
