import { Observable, of } from 'rxjs';
import { delay, map } from 'rxjs/operators';
import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';

import { UserWService } from '../../../core/services/user-w.service';
import { DataApiService } from '../../../core/services/data-api.service';


import { HttpClient } from  '@angular/common/http';
import { DemoFilePickerAdapter } from  '../../../core/file-picker.adapter';
import { FilePickerComponent } from '../../../../assets/file-picker/src/lib/file-picker.component';
import { FilePreviewModel } from '../../../../assets/file-picker/src/lib/file-preview.model';
import { ValidationError } from '../../../../assets/file-picker/src/lib/validation-error.model';


@Component({
  selector: 'newproject',
  templateUrl: './newproject.component.html',
  styleUrls: ['./newproject.component.scss']
})
export class NewprojectComponent implements OnInit {
 adapter = new DemoFilePickerAdapter(this.http,this._uw);
  @ViewChild('uploader', { static: true }) uploader: FilePickerComponent;
   myFiles: FilePreviewModel[] = [];

  constructor(    

    private http: HttpClient,
    public _uw:UserWService, 
    private dataApiService: DataApiService


  	) { }
   public isError = false;

  public pagoImage:any[]=[];
  public images:any[]=[];

  

    
  public okPago(){
   // let id = this._uw.order.id;
 //console.log("id disponible para enviar: "+id);
   // this.updateOrder();
    }








  ngOnInit() {

     // this.ngFormSendPago = this.formBuilder.group({
     // npedido: ["",[Validators.required]]
    //  });
  }


    onIsError(): void {
    this.isError = true;
    setTimeout(() => {
      this.isError = false;
    }, 4000);
  }


   onValidationError(e: ValidationError) {
    console.log(e);
  }
  onUploadSuccess(e: FilePreviewModel) {
   // console.log(e);
  // console.log(this.myFiles);
  this.images=this._uw.file;
  }
  onRemoveSuccess(e: FilePreviewModel) {
    console.log(e);
  }
  onFileAdded(file: FilePreviewModel) {
    
    file.fileName="https://db.penguinscleaning.ca:80/imgPenguins/server/local-storage/tixsImages/"+file.fileName;
    this.myFiles.push(file);
    // this.images.push(file.fileName);

  }

  removeFile() {
  this.uploader.removeFileFromList(this.myFiles[0].fileName);
  }

}