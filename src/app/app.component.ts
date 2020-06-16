import {Component, OnInit} from '@angular/core';
import {HTMLPerspectiveViewerElement} from "@finos/perspective-viewer";
import perspective, {PerspectiveWorker} from "@finos/perspective";
import "@finos/perspective-viewer";
import "@finos/perspective-viewer-datagrid";
//import "@finos/perspective-viewer-d3fc";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  private worker: PerspectiveWorker;
  private reader: FileReader;
  private file: File = null;

  constructor() {
    this.worker = perspective.worker();
    this.reader = new FileReader();
  }

  handleFile(file: File): void {
    this.file = file;

    this.reader.onloadend = (ev) => {

      const viewer: HTMLPerspectiveViewerElement = document.getElementsByTagName("perspective-viewer")[0] as HTMLPerspectiveViewerElement;
      // @ts-ignore
      const table = this.worker.table(this.reader.result);
      //table.view().to_csv().then(a => console.log(a))
      viewer.load(table);

    }

    this.reader.readAsText(this.file);
  }

  ngOnInit(): void {}
}
