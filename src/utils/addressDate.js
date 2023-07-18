const areaOptions=[
    { 
        value:'济南市', 
        label:'济南市', 
        children:[
            { value:'历下区', label:'历下区' },
            { value:'市中区', label:'市中区' },
            { value:'槐荫区', label:'槐荫区' },
            { value:'天桥区', label:'天桥区' },
            { value:'历城区', label:'历城区' },
            { value:'长清区', label:'长清区' },
            { value:'章丘区', label:'章丘区' },
            { value:'济阳区', label:'济阳区' },
            { value:'莱芜区', label:'莱芜区' },
            { value:'钢城区', label:'钢城区' },
            { value:'平阴县', label:'平阴县' },
            { value:'商河县', label:'商河县' }] 
    },{
        value: '青岛市',
        label: '青岛市',
        children: [
            { value: '市南区', label: '市南区' },
            { value: '市北区', label: '市北区' },
            { value: '黄岛区', label: '黄岛区' },
            { value: '崂山区', label: '崂山区' },
            { value: '李沧区', label: '李沧区' },
            { value: '城阳区', label: '城阳区' },
            { value: '即墨区', label: '即墨区' },
            { value: '胶州市', label: '胶州市' },
            { value: '平度市', label: '平度市' },
            { value: '莱西市', label: '莱西市' }]
    },{
        value: '淄博市',
        label: '淄博市',
        children: [
            { value: '淄川区', label: '淄川区' },
            { value: '张店区', label: '张店区' },
            { value: '博山区', label: '博山区' },
            { value: '临淄区', label: '临淄区' },
            { value: '周村区', label: '周村区' },
            { value: '桓台县', label: '桓台县' },
            { value: '高青县', label: '高青县' },
            { value: '沂源县', label: '沂源县' }
        ]
    },{ 
        value:'枣庄市', 
        label:'枣庄市', 
        children:[ 
            { value:'市中区',label:'市中区' },
            { value:'薛城区', label:'薛城区' },
            { value:'峄城区', label:'峄城区' },
            { value:'台儿庄区', label:'台儿庄区' },
            { value:'山亭区', label:'山亭区' },
            { value:'滕州市', label:'滕州市' }] 
    },{ 
        value:'东营市', 
        label:'东营市', 
        children:[
            { value:'东营区', label:'东营区' },
            { value:'河口区', label:'河口区' },
            { value:'垦利区', label:'垦利区' },
            { value:'利津县', label:'利津县' },
            { value:'广饶县', label:'广饶县' }] 
    },{ 
        value:'烟台市', 
        label:'烟台市', 
        children:[
            { value:'芝罘区', label:'芝罘区' },
            { value:'福山区', label:'福山区' },
            { value:'牟平区', label:'牟平区' },
            { value:'莱山区', label:'莱山区' },
            { value:'蓬莱区', label:'蓬莱区' },
            { value:'龙口市', label:'龙口市' },
            { value:'莱阳市', label:'莱阳市' },
            { value:'莱州市', label:'莱州市' },
            { value:'招远市', label:'招远市' },
            { value:'栖霞市', label:'栖霞市' },
            { value:'海阳市', label:'海阳市' }]
    },{ 
        value:'潍坊市', 
        label:'潍坊市', 
        children:[
            { value:'潍城区', label:'潍城区' },
            { value:'寒亭区', label:'寒亭区' },
            { value:'坊子区', label:'坊子区' },
            { value:'奎文区', label:'奎文区' },
            { value:'青州市', label:'青州市' },
            { value:'诸城市', label:'诸城市' },
            { value:'寿光市', label:'寿光市' },
            { value:'安丘市', label:'安丘市' },
            { value:'高密市', label:'高密市' },
            { value:'昌邑市', label:'昌邑市' },
            { value:'临朐县', label:'临朐县' },
            { value:'昌乐县', label:'昌乐县' }] 
    },{ 
        value:'济宁市', 
        label:'济宁市', 
        children:[
            { value:'任城区', label:'任城区' },
            { value:'兖州区', label:'兖州区' },
            { value:'曲阜市', label:'曲阜市' },
            { value:'邹城市', label:'邹城市' },
            { value:'微山县', label:'微山县' },
            { value:'鱼台县', label:'鱼台县' },
            { value:'金乡县', label:'金乡县' },
            { value:'嘉祥县', label:'嘉祥县' },
            { value:'汶上县', label:'汶上县' },
            { value:'泗水县', label:'泗水县' },
            { value:'梁山县', label:'梁山县' }] 
    },{ 
        value:'泰安市', 
        label:'泰安市', 
        children:[
            { value:'泰山区', label:'泰山区' },
            { value:'岱岳区', label:'岱岳区' },
            { value:'新泰市', label:'新泰市' },
            { value:'肥城市', label:'肥城市' },
            { value:'宁阳县', label:'宁阳县' },
            { value:'东平县', label:'东平县' }] 
    },{ 
        value:'威海市', 
        label:'威海市', 
        children:[
            { value:'环翠区', label:'环翠区' },
            { value:'文登区', label:'文登区' },
            { value:'荣成市', label:'荣成市' },
            { value:'乳山市', label:'乳山市' }] 
    },{ 
        value:'日照市', 
        label:'日照市', 
        children:[
            { value:'东港区', label:'东港区' },
            { value:'岚山区', label:'岚山区' },
            { value:'五莲县', label:'五莲县' },
            { value:'莒县', label:'莒县' }] 
    },{ 
        value:'临沂市', 
        label:'临沂市', 
        children:[
            { value:'兰山区', label:'兰山区' },
            { value:'罗庄区', label:'罗庄区' },
            { value:'河东区', label:'河东区' },
            { value:'沂南县', label:'沂南县' },
            { value:'郯城县', label:'郯城县' },
            { value:'沂水县', label:'沂水县' },
            { value:'兰陵县', label:'兰陵县' },
            { value:'费县', label:'费县' },
            { value:'平邑县', label:'平邑县' },
            { value:'莒南县', label:'莒南县' },
            { value:'蒙阴县', label:'蒙阴县' },
            { value:'临沭县', label:'临沭县' }]
    },{ 
        value:'德州市', 
        label:'德州市', 
        children:[
            { value:'德城区', label:'德城区' },
            { value:'陵城区', label:'陵城区' },
            { value:'乐陵市', label:'乐陵市' },
            { value:'禹城市', label:'禹城市' },
            { value:'宁津县', label:'宁津县' },
            { value:'庆云县', label:'庆云县' },
            { value:'临邑县', label:'临邑县' },
            { value:'齐河县', label:'齐河县' },
            { value:'平原县', label:'平原县' },
            { value:'夏津县', label:'夏津县' },
            { value:'武城县', label:'武城县' }] 
    },{ 
        value:'聊城市', 
        label:'聊城市', 
        children:[
            { value:'东昌府区', label:'东昌府区' },
            { value:'茌平区', label:'茌平区' },
            { value:'临清市', label:'临清市' },
            { value:'阳谷县', label:'阳谷县' },
            { value:'莘县', label:'莘县' },
            { value:'东阿县', label:'东阿县' },
            { value:'冠县', label:'冠县' },
            { value:'高唐县', label:'高唐县' }]
    },{ 
        value:'滨州市', 
        label:'滨州市', 
        children:[
            { value:'滨城区', label:'滨城区' },
            { value:'沾化区', label:'沾化区' },
            { value:'邹平市', label:'邹平市' },
            { value:'惠民县', label:'惠民县' },
            { value:'阳信县', label:'阳信县' },
            { value:'无棣县', label:'无棣县' },
            { value:'博兴县', label:'博兴县' }]
    },{ 
        value:'菏泽市', 
        label:'菏泽市', 
        children:[
            { value:'牡丹区', label:'牡丹区' },
            { value:'定陶区', label:'定陶区' },
            { value:'曹县', label:'曹县' },
            { value:'单县', label:'单县' },
            { value:'成武县', label:'成武县' },
            { value:'巨野县', label:'巨野县' },
            { value:'郓城县', label:'郓城县' },
            { value:'鄄城县', label:'鄄城县' },
            { value:'东明县', label:'东明县' }] 
    }
]

export default areaOptions; 