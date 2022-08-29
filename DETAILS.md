# Paginator

![Screen Recording 2022-08-29 at 11 47 44 PM](https://user-images.githubusercontent.com/26861798/187312360-b4389704-8480-402b-95fb-b3734c8dc90d.gif)

A very simple frontend app for paginated data that fetches data from randomapi and display the 5 rows of data paginated. It was developed as part of the Technical Assessments for consideration into the TalentQL Pipeline Program (FrontEnd).

# URL

https://talentql-daniel-olagunju.onrender.com/

## How it works

### Pre-requisites and Local Development

Developers using this project should already have:

- node

### Template

The skeletal template was obtained from [HERE](https://github.com/pipeline-v2-eligibility/frontend-starter)

### Installed Libraries

```
$ yarn add  --dev parcel
$ yarn add react react-dom
```

### Start the Application

```
$ yarn start

```

### Additional Files Created

The following files were changed/adjusted

```
=> src/app.ts >> src/app.js. - contains the app view code containing JSX
=> src/index.html -  contains basic html code and javascript
=> src/style.css - contains styling components of the code
```

While these files below were added to manage the different component of the Application

```
=> src/api.js. - contains the app api endpoints and logic
=> src/index.js - JSX code connecting the app.js to the index.html

```

Bulk of the code changes that was written was done in the `src/app.js` and `src/api.js`

In the `src/app.js`, React hooks `useEffect` and `useState` were used respectively to fetch data from the given endpoint and manage application state.

```
    const [pageData, setPageData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [currentPageNo, setCurrentPageNo] = useState(1);
    const [previousPageNo, setPreviousPageNo] = useState(0);
    const [nextPageNo, setNextPageNo] = useState(2);
    const [page, setPage] = useState(1);

```

The `useState` hook was used to handle the state of the data obtained from the endpoint, loading and respective page numbers.
Such that for every `previous` or `next` button clicked, the data on the table is changed per page number.
While `useEffect` hook efficiently was used to manage the function `getData` as exported from `src/api.js` where the endpoint was called and data fetched to the View.
Data retrieved was in this JSON format

```
    {
  "results": [
    {
      "1": [
        {
          "id": "c4ca4238a0b923820dcc509a6f75849b",
          "row": 1,
          "age": 44,
          "gender": "female"
        }...,
        {
          "id": "e4da3b7fbbce2345d7772b0674a318d5",
          "row": 5,
          "age": 39,
          "gender": "female"
        }
      ],
      "2": [
        {
          "id": "1679091c5a880faf6fb5e6087eb1b2dc",
          "row": 6,
          "age": 32,
          "gender": "female"
        }...,
        {
          "id": "d3d9446802a44259755d38e6d163e820",
          "row": 10,
          "age": 31,
          "gender": "female"
        }
      ],
      "paging": {
        "next": "https://randomapi.com/api/8csrgnjw?key=LEIX-GF3O-AG7I-6J84&page=3"
      }
    }
  ],
  "info": {...}
}
```

Where the numeric values eg `"2": [` refers to the page number and subsequent array of objects refers to the array of items to be displayed on each page.
The above data was futher processed using the `map` method to pass each array Item intot a table row as shown below

```
    {pageData?.map((data, index)=>{
        return (
            <tr key={data.id} data-entryid={data.id}>
                <td>{data.row}</td>
                <td>{data.gender}</td>
                <td>{data.age}</td>
            </tr>
        )
    })
    }
```

### API referenced

```
    const baseUrl = "https://randomapi.com/api/";
    const apiKey = "XXX-YYYY...";
```

## Author

[Daniel Olagunju](https://github.com/todak2000)

## Acknowledgements

Inspiration, code snippets, etc.

- [TalentQL](https://talentql.com)
- [Wole-joko](https://github.com/chalu/wole-joko)
- [Parcel](https://parceljs.org/getting-started/webapp/)

## Badges

[![Codacy Badge](https://app.codacy.com/project/badge/Grade/d8995c226ed2496299c2cf1d40584835)](https://www.codacy.com/gh/todak2000/talentql_assessment/dashboard?utm_source=github.com&utm_medium=referral&utm_content=todak2000/talentql_assessment&utm_campaign=Badge_Grade)
