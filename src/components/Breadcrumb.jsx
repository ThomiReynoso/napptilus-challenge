import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from "@chakra-ui/react";

export const BreadcrumbComponent = ({id = null, model = null, brand = null }) => {
    return (
        <Breadcrumb color={"white"} separator={">"}>
            <BreadcrumbItem>
                <BreadcrumbLink href='/'>Products</BreadcrumbLink>
            </BreadcrumbItem>
           {id && <BreadcrumbItem isCurrentPage>
                <BreadcrumbLink href={`/product/${id}`}>{`${brand}-${model}`}</BreadcrumbLink>
            </BreadcrumbItem>}
        </Breadcrumb>
    )
}
