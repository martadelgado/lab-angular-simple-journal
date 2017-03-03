import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RetrieverService } from '../retriever.service';



@Component({
  selector: 'app-add-entry',
  templateUrl: './add-entry.component.html',
  styleUrls: ['./add-entry.component.css'],
  providers: [RetrieverService]
})
export class AddEntryComponent implements OnInit {
  entry = { title: String, content: String};

  constructor(
    private route: ActivatedRoute,
    private retriever: RetrieverService
  ) { }

  ngOnInit() {

  }

  addNewEntry() {
    console.log(this.entry)
    this.retriever.addEntry(this.entry)
  }

}
