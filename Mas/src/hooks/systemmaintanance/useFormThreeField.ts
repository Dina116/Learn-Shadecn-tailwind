import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useQuery } from "@tanstack/react-query";
import { getBooks, getWalks, getEmp } from "../../api/SystemApi";
import type { FormThreeFieldsProps, FormThreeFieldInput } from "../../types";
import { FormSchema } from "./FormSchema";
import type { SubmitHandler } from "react-hook-form";

export const useFormThreeFieldsLogic = ({
  onSubmit,
  data = [],
}: FormThreeFieldsProps) => {
  const {
    control,
    handleSubmit,
    resetField,
    watch,
    formState: { errors },
  } = useForm<FormThreeFieldInput>({
    defaultValues: {
      BILLGROUP: "",
      BOOK_NO: "",
      WALK_DESCRIPTION: "",
      ID: "",
      Collection_Count: 0,
    },
    resolver: zodResolver(FormSchema),
  });

  const selectedGroup = watch("BILLGROUP");
  const selectedBook = watch("BOOK_NO");
  const selectedGroupObject = data.find((g) => g.GROUP_ID === selectedGroup);

  const { data: books = [] } = useQuery({
    queryKey: ["books", selectedGroup],
    queryFn: () => getBooks(selectedGroup, selectedGroupObject!.STATION_NO),
    enabled: !!selectedGroup && !!selectedGroupObject,
  });

  const { data: walks = [] } = useQuery({
    queryKey: ["walks", selectedGroup, selectedBook],
    queryFn: () => getWalks(selectedGroup, selectedGroupObject!.STATION_NO),
    enabled: !!selectedGroup && !!selectedBook && !!selectedGroupObject,
  });

  const { data: emp = [] } = useQuery({
    queryKey: ["emp"],
    queryFn: () => getEmp(),
  });
  console.log("emp from hook", emp);

  const onValidSubmit: SubmitHandler<FormThreeFieldInput> = (data) => {
    const parsed = FormSchema.parse(data);
    onSubmit(parsed);
  };

  const handleGroupChange = () => {
    resetField("BOOK_NO");
    resetField("WALK_DESCRIPTION");
  };

  const handleBookChange = () => {
    resetField("WALK_DESCRIPTION");
  };

  return {
    control,
    handleSubmit,
    resetField,
    watch,
    errors,
    books,
    walks,
    selectedGroup,
    selectedBook,
    onValidSubmit,
    handleGroupChange,
    handleBookChange,
    emp,
  };
};
