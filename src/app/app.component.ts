import { Component } from '@angular/core';   
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CommonModule} from '@angular/common';
import {MenuItem,MenuModule,ButtonModule,TabViewModule, InputTextModule, CheckboxModule, 
  RadioButtonModule, SelectItem, TabMenuModule, DropdownModule, AccordionModule, PanelMenuModule} from 'primeng/primeng';
import {NgModule} from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import {CodeHighlighterModule} from 'primeng/primeng';

interface City {
  name: string,
  code: string
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})


export class AppComponent implements OnInit {
  title = 'app';
  items: MenuItem[];
  
      ngOnInit() {
          this.items = [
              {
                  label: 'File',
                  icon: 'fa-file-o',
                  items: [{
                          label: 'New', 
                          icon: 'fa-plus',
                          items: [
                              {label: 'Project'},
                              {label: 'Other'},
                          ]
                      },
                      {label: 'Open'},
                      {separator: true},
                      {label: 'Quit'}
                  ]
              },
              {
                  label: 'Edit',
                  icon: 'fa-edit',
                  items: [
                      {label: 'Undo', icon: 'fa-mail-forward'},
                      {label: 'Redo', icon: 'fa-mail-reply'}
                  ]
              },
              {
                  label: 'Help',
                  icon: 'fa-question',
                  items: [
                      {
                          label: 'Contents'
                      },
                      {
                          label: 'Search', 
                          icon: 'fa-search', 
                          items: [
                              {
                                  label: 'Text', 
                                  items: [
                                      {
                                          label: 'Workspace'
                                      }
                                  ]
                              },
                              {
                                  label: 'File'
                              }
                      ]}
                  ]
              },
              {
                  label: 'Actions',
                  icon: 'fa-gear',
                  items: [
                      {
                          label: 'Edit',
                          icon: 'fa-refresh',
                          items: [
                              {label: 'Save', icon: 'fa-save'},
                              {label: 'Update', icon: 'fa-save'},
                          ]
                      },
                      {
                          label: 'Other',
                          icon: 'fa-phone',
                          items: [
                              {label: 'Delete', icon: 'fa-minus'}
                          ]
                      }
                  ]
              }
          ];
      }

}
