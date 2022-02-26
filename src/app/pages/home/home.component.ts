import { Component, OnInit } from '@angular/core';
import * as XLSX from 'xlsx';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/services/api.service';
import { DomSanitizer } from '@angular/platform-browser';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(
    private apiServices: ApiService,
    private domSanitizer: DomSanitizer
  ) { }

  public serverList: any = [];
  public jsonServerList: string = '';
  public willDownload:boolean = false;
  public downloadJsonHref: any = '';

  ngOnInit(): void {
    this.reloadDB();
  }

  reloadDB() {
    this.apiServices.getAll().subscribe((data) => {
      this.serverList = data;
    });
  }



}
