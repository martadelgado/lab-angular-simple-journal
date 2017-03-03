import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RetrieverService } from '../retriever.service';

@Component({
  selector: 'app-journal-details',
  templateUrl: './journal-details.component.html',
  styleUrls: ['./journal-details.component.css'],
  providers: [RetrieverService]
})

export class JournalDetailsComponent implements OnInit {
  entry = {};

  constructor(
    private route: ActivatedRoute,
    private retriever: RetrieverService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.getJournalDetails(params['id']);
    });
  }

  getJournalDetails(id) {
    this.retriever.get(id)
      .subscribe((entry) => {
        this.entry = entry;
      });
  
  }
}
