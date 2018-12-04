import { async, ComponentFixture, TestBed } from '@angular/core/testing'
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material'

import { commonTestingModules } from '../common.testing'
import { SimpleDialogComponent } from './simple-dialog.component'

describe('SimpleDialogComponent', () => {
  let component: SimpleDialogComponent
  let fixture: ComponentFixture<SimpleDialogComponent>

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: commonTestingModules,
      providers: [
        {
          provide: MatDialogRef,
          useValue: {},
        },
        {
          provide: MAT_DIALOG_DATA,
          useValue: {}, // Add any data you wish to test if it is passed/used correctly
        },
      ],
      declarations: [SimpleDialogComponent],
    }).compileComponents()
  }))

  beforeEach(() => {
    fixture = TestBed.createComponent(SimpleDialogComponent)
    component = fixture.componentInstance
    fixture.detectChanges()
  })

  it('should create', () => {
    expect(component).toBeTruthy()
  })
})
