import { Component, OnInit } from '@angular/core';
import { RetrieverService } from '../retriever.service';

@Component({
  selector: 'app-entry-list',
  templateUrl: './entry-list.component.html',
  styleUrls: ['./entry-list.component.css'],
  providers: [RetrieverService]
})

export class EntryListComponent implements OnInit {
  entries;

  constructor(private retriever: RetrieverService) { }

  ngOnInit() {
    this.retriever.getList()
      .subscribe((entries) => {
        this.entries = entries;
      });
  }

}
