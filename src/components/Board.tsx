import { Table, TableBody, TableHead } from "@/style/Board";
import { useState, useEffect } from "react";
import { getSampleData } from "@/api/board";

/**
 * @description 게시판
 */
function Board() {
    // state
    const [list, setList] = useState<any[]>([]);

    const fetchRequest = async () => {
        const result = await getSampleData();

        // setList type이 list이기 때문에 초기값을 배열로 매핑해줌
        const { resultList = [] } = result || {};
        setList(resultList);

        console.log(result);
    };

    // watch
    useEffect(() => {
        // 최초 화면 렌더링 후 한번만 실행되는 영역
        // useEffect 자체에서는 async사용할 수 없어서 메소드를 따로 작성해야한다.
        fetchRequest();
    }, []);

    // view
    return (
        <>
            <input />
            <button>검색</button>
            <Table>
                <colgroup>
                    <col />
                    <col />
                    <col />
                    <col />
                    <col />
                </colgroup>
                <TableHead>
                    <tr>
                        <th>Index</th>
                        <th>aflNm</th>
                        <th>assetScaleCcdNm</th>
                        <th>asymbol</th>
                        <th>currGrade</th>
                        <th>unvrsNm</th>
                    </tr>
                </TableHead>
                <TableBody>
                    {list.map(
                        (
                            {
                                aflNm,
                                assetScaleCcdNm,
                                asymbol,
                                currGrade,
                                unvrsNm,
                            },
                            index
                        ) => (
                            <tr key={index}>
                                <th scope="row">{index}</th>
                                <td>{aflNm}</td>
                                <td>{assetScaleCcdNm}</td>
                                <td>{asymbol}</td>
                                <td>{currGrade}</td>
                                <td>{unvrsNm}</td>
                            </tr>
                        )
                    )}
                </TableBody>
            </Table>
        </>
    );
}

export default Board;
