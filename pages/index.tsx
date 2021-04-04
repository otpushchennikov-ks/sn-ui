import MyComponent from '../@shared/MyComponent';


export default function Index() {
  return (
    <>
      <MyComponent
        size="normal"
        header="Заголовок 1"
        content="Содержимое 1"
      />
      <MyComponent
        size="small"
        header="Заголовок 2"
        content="Содержимое 2"
      />
    </>
  );
}
