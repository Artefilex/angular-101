# Angular CLI comment 101

1. yeni bir proje oluşturmak için `ng new project name`
2. projeyi acmak için `ng serve`
3. yeni bir component için `ng generate component pages/componentname`

## LifeCycle Hooks

**ngOnChange:** Herhangi bir değişim olduğunda tetiklenir input output için

**ngOnInit:** 3. party bir kütüphaneden data çekerken kullanılır
**ngDoCheck:**
**ngAfterContentInit:**
**ngAfterContentChecked:**
**ngAfterViewInit:**
**ngAfterViewChecked:**

**ngOnDestroy:** bir component ekrandan gittiğinde çağrılır memory-leak için kullanılır

## onChange Hooks

İnputta meydana gelen değişimi yakalamak için kullanıyoruz

```Javascript
export class TwoWayBindingComponent implements OnChanges{

@Input() fullname: string | undefined
 ngOnChanges(changes: SimpleChanges): void {
   console.log(changes)
 }
}

```

kullanıldığı comporente implement ettikten sonra ngOnChanges diyerek istedigimiz işlemi gercekleştiriyoruz

```Javascript
<input type="text" [(ngModel)]="fullname" placeholder="foo" />
<app-two-way-binding [fullname]="fullname" />

```

kullanırken dinamik veri okuması yapacagımız için ilgli degisken için köşeli parantezle sarmalıyoruz
ngModeli kullanabilmek için kullanıldıgı yerde FormModule imports arrayine yazıyoruz
