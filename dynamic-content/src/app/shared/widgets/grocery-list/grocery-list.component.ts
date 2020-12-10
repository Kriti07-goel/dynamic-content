import { AfterViewInit, Component, ComponentRef, Directive, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MatInput } from '@angular/material/input';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AppState } from '../../stores/app.state';
import { addGroceryItem, deleteGroceryItem, setSearchQuery } from '../../stores/grocery-list/grocery-list.actions';
import { selectGroceries, selectGroceriesCount, selectGroceriesFeature } from '../../stores/grocery-list/grocery-list.selectors';
import { GroceryItem } from '../../stores/grocery-list/grocery-list.state';

@Component({
  selector: 'app-grocery-list',
  templateUrl: './grocery-list.component.html',
  styleUrls: ['./grocery-list.component.scss']
})
export class GroceryListComponent implements OnInit, AfterViewInit {
  @ViewChild('query',{  read: MatInput})
  query: MatInput;

  @ViewChild('pager', { read: MatPaginator })
  paginator: MatPaginator;

  groceries$: Observable<GroceryItem[]>;
  count$: Observable<number>;
  dataSource: MatTableDataSource<GroceryItem>;

  get dataSource$() {
    return this.groceries$.pipe(map(t => new MatTableDataSource<GroceryItem>(t)));
  }
  get displayedColumns() {
    return ['name', 'actions'];
  }
  constructor(private store: Store<AppState>) {
    this.dataSource = new MatTableDataSource<GroceryItem>([]);
    this.groceries$ = this.store.select(selectGroceries);
    this.count$ = this.store.select(selectGroceriesCount);

  }

  ngOnInit() {

  }
  ngAfterViewInit(): void {
    this.dataSource$.subscribe(t => {
      this.dataSource = t;
      this.dataSource.paginator = this.paginator;
    });
  }
  onQuery(value: string) {
    this.store.dispatch(setSearchQuery({ query: value }));
  }
  onClearQuery() {
    this.query.value = '';
    this.onQuery(this.query.value);
  }
  onAdd(input: HTMLInputElement) {
    this.store.dispatch(addGroceryItem({ name: input.value }));
    input.value = '';
  }
  onDelete(item: GroceryItem) {
    this.store.dispatch(deleteGroceryItem({ id: item.id }));
  }

}
