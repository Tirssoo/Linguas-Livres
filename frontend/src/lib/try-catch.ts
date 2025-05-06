type Success<T> = {
  data: T;
  error: null;
};

type Failure<E> = {
  data: null;
  error: E;
};

type TryCatch<T, E = Error> = Success<T> | Failure<E>;

export async function tryCatch<T, E = Error>(
  awaitable: Promise<T>,
): Promise<TryCatch<T, E>> {
  try {
    const data = await awaitable;
    return { data, error: null };
  } catch (error) {
    return { data: null, error: error as E };
  }
}
